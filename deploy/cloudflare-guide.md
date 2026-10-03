# Cloudflare sozlamalari — 10 000 Concurrent Foydalanuvchi Uchun Qo‘llanma

Ushbu arxitekturada **Cloudflare** birinchi mudofaa chizig‘i va global keshlovchi (CDN) sifatida ishlaydi. 10 000 nafar foydalanuvchining so‘rovlari to‘g‘ridan-to‘g‘ri serverga emas, Cloudflare Edge serverlariga boradi.

---

## 1. DNS va Proksi (Orange Cloud)
1. Domen nomingizni Cloudflare’ga ulang.
2. DNS yozuvlarida asosiy server IP manziliga `A` record yarating.
3. **Proxy status**: `Proxied` (To‘q sariq bulut ☁️) qilib yoqing.
4. SSL/TLS rejimi: `Full (Strict)` qilib o‘rnating.

---

## 2. Cloudflare Cache Rules (Kesh Qoidalari)

Cloudflare boshqaruv panelida **Caching** -> **Cache Rules** bo‘limiga o‘tib quyidagi qoidalarni qo‘shing:

### Qoida 1: Jonli o‘yinlar (Live Matches)
* **Qoida nomi**: `Football Live Cache`
* **Shart (Field)**: `URI Path` -> `starts with` -> `/api/matches/live`
* **Cache Eligibility**: `Eligible for cache`
* **Edge TTL**: `Respect origin` yoki `Override origin` -> `15 seconds`
* **Browser TTL**: `10 seconds`
* **Serve stale content**: `Enabled (Serve stale content while revalidating)`

> **Natija**: 10 000 foydalanuvchidan 9 900 tasi bevosita Cloudflare chekka serverlaridan 10ms ichida javob oladi, asosiy serveringizga faqat har 15-30 soniyada 1 dona so‘rov yetib keladi.

### Qoida 2: Turnir jadvali (Standings)
* **Qoida nomi**: `Football Standings Cache`
* **Shart**: `URI Path` -> `matches wildcard` -> `/api/leagues/*/standings`
* **Edge TTL**: `Override origin` -> `5 minutes (300 seconds)`
* **Browser TTL**: `2 minutes`

### Qoida 3: Statik frontend fayllari (React Assets)
* **Qoida nomi**: `Static Assets Cache`
* **Shart**: `URI Path` -> `starts with` -> `/assets/`
* **Edge TTL**: `1 month`
* **Browser TTL**: `1 year`

---

## 3. Cloudflare Rate Limiting va DDoS Himoyasi

**Security** -> **WAF** -> **Rate limiting rules**:
1. **Qoida nomi**: `Protect API from Scraping & Abuse`
2. **Shart**: `URI Path starts with /api/`
3. **Cheklov**: `10 soniya ichida 100 ta so‘rovdan oshmasin`
4. **Harakat (Action)**: `Block` (yoki `Managed Challenge` / Captcha).

---

## 4. Haqiqiy Foydalanuvchi IP Manzilini aniqlash (CF-Connecting-IP)

Cloudflare proksi orqali o‘tganda barcha so‘rovlar Cloudflare IP’sidan kelgandek ko‘rinadi. Bizning Nginx va Fastify serverimizda quyidagi konfiguratsiyalar yoqilgan:
- **Nginx**: `real_ip_header CF-Connecting-IP;` va Cloudflare IP ro‘yxatlari kiritilgan.
- **Fastify**: `req.headers['cf-connecting-ip']` orqali haqiqiy mijoz IP’si olinadi va lokal rate limiter shu bo‘yicha ishlaydi.

---

## 5. Bosqichma-bosqich himoya sxemasi:
```
[10,000 Foydalanuvchi]
          │
          ▼
[Cloudflare Edge CDN & DDoS WAF]  <-- 95% statik va kesh javoblar shu yerdan qaytadi
          │ (Faqat 1 ta so‘rov keladi)
          ▼
[Nginx Reverse Proxy (Gzip/Brotli)]
          │
          ▼
[Node.js + Fastify (Single-Flight Deduplication)]
          │
          ▼
[Redis Cache (30s / 60s / 300s TTL)]
          │ (Cache miss bo‘lsa va faqat 1-so‘rov)
          ▼
[Football-Data.org API]
```
