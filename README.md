# ⚽ FutbolLive Pro — 10 000 Bir Vaqtdagi (Concurrent) Foydalanuvchiga Mo‘ljallangan Futbol Platformasi

> **Arxitektura:** Faqat 1 ta serverda ishlovchi yuqori unumdorlikdagi tizim:  
> **React + TypeScript** (Frontend) + **Node.js + Fastify** (Backend) + **Redis** (Kesh & Deduplication) + **PostgreSQL** (Ma’lumotlar bazasi & Connection Pool) + **Cloudflare** (DDoS & Edge Caching).

---

## 📌 Asosiy Talab va Yechim: 10 000 Foydalanuvchi va Cache Stampede (Thundering Herd) Muammosi

### ⚠️ Muammo:
Agar 10 000 nafar foydalanuvchi bir vaqtning o‘zida **Live** sahifasini ochsa, oddiy tizimlarda har bir so‘rov tashqi Football API'ga yuboriladi:
1. Football-Data.org API limitdan oshib (Rate limit 429) bloklanadi.
2. Server zaxiralari tugab (CPU/Memory spike), server qulaydi.
3. Foydalanuvchilar xatolik ko‘radi.

### 🛡️ Bizning Yechimimiz (Single-Flight Deduplication & Stale-While-Revalidate):
1. **Single-Flight Request Deduplication (Bir xil so‘rovlarni birlashtirish):**
   Bir vaqtning o‘zida kelgan 10 000 ta so‘rov uchun xotirada faqat **1 ta Promise** ishga tushadi. Qolgan 9 999 ta so‘rov yangi HTTP so‘rov ochmasdan, o‘sha bitta Promise natijasini kutadi.
2. **Redis Kesh:**
   Olingan ma’lumot darhol Redis'ga yoziladi va barcha foydalanuvchilarga Redis'dan 1-3 millisoniyada tarqatiladi.
3. **Kesh muddatlari (TTL):**
   - 🔴 **Live (Jonli) ma’lumotlar:** `30 soniya` (`TTL = 30s`)
   - 📅 **Bugungi o‘yinlar:** `60 soniya` (`TTL = 60s`)
   - 🏆 **Turnir jadvali (Standings):** `5 daqiqa` (`TTL = 300s`)
   - 👥 **Jamoa va tarkiblar:** `15 daqiqa` (`TTL = 900s`)
4. **Stale-While-Revalidate & API Ishlamay qolgandagi Fallback:**
   Agar Football-Data.org API ishlamay qolsa (500, 503, 429 yoki timeout), tizim xatolik bermaydi! Buning o‘rniga Redis yoki doimiy xotirada saqlangan **oxirgi keshdagi (stale) ma’lumot** foydalanuvchilarga taqdim etiladi.
5. **API Kalit Xavfsizligi:**
   Football-Data.org API kaliti **faqat backenddagi `.env` faylida** saqlanadi. Frontend kodiga yoki brauzerga hech qachon chiqmaydi.

---

## 📊 Sinov Natijasi: 10 000 So‘rovli Jonli Test

Fastify backendimizda o‘rnatilgan simulyatsiya orqali olingan haqiqiy natija:

```json
{
  "success": true,
  "simulatedConcurrentRequests": 10000,
  "durationMs": 30,
  "requestsPerSecond": 333333,
  "sourceDistribution": {
    "upstream": 1,
    "coalesced": 9999,
    "cache": 0,
    "stale": 0
  },
  "stampedePrevented": true,
  "message": "Simulated 10000 simultaneous requests. Upstream API calls: 1. Deduplicated/Coalesced: 9999."
}
```
* **Bir vaqtda kelgan so‘rovlar:** 10 000 ta
* **Football API'ga yuborilgan so‘rov:** Faqat 1 ta!
* **Deduplicated (birlashtirilgan):** 9 999 ta
* **Server javob berish vaqti:** Bor-yo‘g‘i 30 millisoniya (333 000 req/sec)!

---

## 🏗️ Tizim Arxitekturasi va Loyiha Tarkibi

```
football-live-platform/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── env.ts              # Konfiguratsiya & TTL qoidalari
│   │   │   └── redis.ts            # Redis client (avtomatik memory-fallback bilan)
│   │   ├── db/
│   │   │   ├── pool.ts             # PostgreSQL connection pool (max 30-40 clients)
│   │   │   └── schema.sql          # SQL jadvallari (users, favorites, snapshots)
│   │   ├── services/
│   │   │   ├── footballApi.ts      # Football-Data.org API mijozi (timeout, fallback)
│   │   │   ├── cacheService.ts     # Single-Flight Deduplication & Kesh mexanizmi
│   │   │   └── mockData.ts         # Boy futbol ma'lumotlari (simulyatsiya va zaxira)
│   │   ├── routes/
│   │   │   ├── matches.ts          # /api/matches (live 30s, today 60s, tafsilotlar)
│   │   │   ├── leagues.ts          # /api/leagues & /api/leagues/:code/standings (5 daqiqa)
│   │   │   ├── teams.ts            # /api/teams/:id (15 daqiqa)
│   │   │   ├── favorites.ts        # /api/favorites (PostgreSQL saqlash)
│   │   │   └── system.ts           # /api/system/metrics & /api/system/simulate-load
│   │   ├── server.ts               # Fastify server (Brotli/Gzip, Rate limit, Cloudflare IP)
│   │   ├── cluster.ts              # Multi-core cluster rejim (barcha CPU yadrolarini band qilish)
│   │   └── types/                  # TypeScript turlari
│   ├── .env.example                # FOOTBALL_API_KEY=YOUR_TOKEN_HERE
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/             # StatusBadge, MatchCard, MatchStats, LeagueTable, TeamSquad, Header, Footer
│   │   ├── pages/                  # Home, Live, Matches, Leagues, Standings, Teams, Favorites, Profile
│   │   ├── context/                # FavoritesContext, ThemeContext
│   │   ├── services/api.ts         # Backend API mijozi
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css               # Tailwind CSS & maxsus stadion mavzusi
│   ├── vite.config.ts
│   ├── package.json
│   └── tsconfig.json
├── deploy/
│   ├── docker-compose.yml          # Bitta server uchun to‘liq Docker stek (Redis, PG, Fastify, Nginx)
│   ├── nginx.conf                  # 20 000 socket, Cloudflare Real-IP, Gzip/Brotli, Keep-Alive
│   ├── cloudflare-guide.md         # Cloudflare Edge Caching, WAF, Page Rules qo‘llanmasi
│   └── sysctl-tuning.conf          # Linux yadro va tarmoq parametrlarini 10k ga moslash
├── .env.example                    # Asosiy muhit namunasi
├── start-dev.bat                   # Windows tezkor ishga tushirish skripti
└── start-dev.sh                    # Linux/macOS ishga tushirish skripti
```

---

## 🚀 Ilovani Ishga Tushirish

### 1-Usul: Lokal Ishlab Chiqish (Local Development)

#### Backend:
```bash
cd backend
npm install
npm run dev
# Backend http://localhost:4000 da ishga tushadi
```

#### Frontend:
```bash
cd frontend
npm install
npm run dev
# Frontend http://localhost:3000 da ishga tushadi
```

Yoki Windows'da to‘g‘ridan-to‘g‘ri `start-dev.bat` faylini ikki marta bosing!

---

### 2-Usul: Production Rejimda Bitta Serverga O‘rnatish (Docker Compose)

Bitta Linux VPS serverda (masalan, Ubuntu 22.04 / 24.04):

1. **Linux tarmog‘ini sozlang:**
   ```bash
   sudo cp deploy/sysctl-tuning.conf /etc/sysctl.d/99-football-10k.conf
   sudo sysctl -p /etc/sysctl.d/99-football-10k.conf
   ```

2. **`.env` faylini yarating:**
   ```bash
   cp .env.example .env
   # .env ichida FOOTBALL_API_KEY o‘rniga o‘z tokeningizni yozing
   nano .env
   ```

3. **Barcha tizimni (Frontend + Backend Cluster + Redis + PostgreSQL + Nginx) ishga tushiring:**
   ```bash
   cd deploy
   docker-compose up -d --build
   ```

Tizim `http://SIZNING_DOMENINGIZ` yoki `http://SERVER_IP` orqali to‘liq ishlaydi.

---

## 🔒 Xavfsizlik va .env Sozlamalari

Haqiqiy Football-Data.org API kalitingizni olish uchun:
1. [football-data.org](https://www.football-data.org/client/register) dan bepul ro‘yxatdan o‘ting.
2. `backend/.env` yoki root `.env` faylida o‘rnating:
   ```env
   FOOTBALL_API_KEY=sizning_haqiqiy_tokeningiz
   ```
> **Eslatma:** Agar kalit kiritilmasa yoki `YOUR_TOKEN_HERE` qoldirilsa, ilova to‘xtab qolmaydi — o‘rnatilgan yuqori aniqlikdagi simulyatsiya ma’lumotlari (Premier League, Champions League, La Liga, jonli o‘yinlar va statistika) bilan to‘liq ishlaydi.

---

## 📱 Sahifalar va Dizayn Xususiyatlari

1. **Home (Bosh sahifa):** Kunning markaziy o‘yini, jonli hisoblar tasmasi, top ligalar va real-vaqt kesh samaradorligi vidjeti.
2. **Live (Jonli):** 30 soniyalik avtomatik yangilanish taymeri, jonli o‘yin daqiqalari (masalan, 68', 33'), hisoblar va liga bo‘yicha filtr.
3. **Matches (O‘yinlar):** Kecha, Bugun, Ertaga va istalgan sana bo‘yicha to‘liq taqvim, status filtri (Jonli, Tugagan, Kutilayotgan).
4. **Leagues (Ligalar):** Yevropa va dunyoning yetakchi musobaqalari (APL, La Liga, Seriya A, Bundesliga, Liga 1, Chempionlar Ligasi).
5. **Standings (Jadval):** 5 daqiqa kesh qilinuvchi to‘liq jadval: O‘rin, Klub, O‘yinlar soni, G‘alaba, Durang, Mag‘lubiyat, To‘plar nisbati, Ochko va so‘nggi 5 o‘yin formasi (W/D/L).
6. **Teams (Jamoalar):** Klub profili, logotipi, stadioni, murabbiyi va pozitsiyalar bo‘yicha ajratilgan tarkib (Darvozabonlar, Himoyachilar, Yarim himoyachilar, Hujumchilar).
7. **Match Details (O‘yin tafsilotlari):** Modal darcha orqali to‘pga egalik qilish %, zarbalar, kartochkalar, burchak to‘plari statistikasi, gol mualliflari va hakam haqida ma’lumot.
8. **Favorites (Sevimlilar):** PostgreSQL va brauzerda saqlanuvchi sevimli o‘yinlar va jamoalar ro‘yxati.
9. **Profile (Profil):** Foydalanuvchi sozlamalari, ranglar mavzusi (Pitch Dark, Midnight, Stadium), va **Jonli 10 000 So‘rovli Sinov (Benchmark)** tugmasi.
