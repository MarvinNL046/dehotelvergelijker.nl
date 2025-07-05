# Hotel API Alternatieven voor dehotelvergelijker.nl

## ❌ Travelpayouts Limitaties
Travelpayouts biedt alleen:
- Affiliate links generatie
- Widgets (niet flexibel genoeg)
- Geen search API

## ✅ Werkende Alternatieven

### 1. **RapidAPI - Booking.com (BESTE OPTIE)**
**Direct Booking.com data met affiliate support**

**Setup:**
1. Ga naar: https://rapidapi.com/tipsters/api/booking-com/
2. Maak gratis account
3. Subscribe voor Basic plan (gratis tot 500 calls/maand)

**Kosten:**
- 0-500 calls: GRATIS
- 500-10k calls: $10/maand
- Unlimited: $50/maand

**Voorbeeld:**
```javascript
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR_KEY',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

// Search locations
fetch('https://booking-com.p.rapidapi.com/v1/hotels/locations?name=amsterdam&locale=nl', options)

// Search hotels
fetch('https://booking-com.p.rapidapi.com/v2/hotels/search?dest_id=-2140479&dest_type=city&checkin_date=2024-02-01', options)
```

### 2. **Amadeus for Developers**
**Professionele travel API (hotels + vluchten)**

**Setup:**
1. Registreer: https://developers.amadeus.com/
2. Self-Service APIs → Create app
3. Gratis test environment

**Gratis Tier:**
- 2000 API calls/maand gratis
- Test data beschikbaar
- Production ready

### 3. **HotelBeds API** 
**Via RapidAPI - Veel hotels**

**Voordelen:**
- 170,000+ hotels wereldwijd
- Real-time beschikbaarheid
- Goede documentatie

### 4. **DIY Oplossing: Web Scraping + Affiliate**
**Voor kleine projecten**

```javascript
// Stap 1: Statische hotel database
const hotels = [
  { id: 1, name: "Hotel V", city: "Amsterdam", basePrice: 120 },
  // ... eigen database
]

// Stap 2: Genereer Booking.com affiliate links
function generateBookingLink(hotelName, city, checkIn, checkOut) {
  const searchUrl = `https://www.booking.com/searchresults.html?ss=${hotelName}+${city}&checkin=${checkIn}&checkout=${checkOut}`
  const affiliateId = "YOUR_BOOKING_AFFILIATE_ID"
  return `https://www.booking.com/index.html?aid=${affiliateId}&url=${encodeURIComponent(searchUrl)}`
}
```

## 🚀 Mijn Advies

### Voor Snel Live Gaan:
1. **Gebruik RapidAPI Booking.com**
   - Makkelijkste setup
   - Echte data
   - Gratis tier is genoeg om te starten

2. **Combineer met Booking.com Affiliate Program**
   - Meld je apart aan voor commissies
   - Gebruik affiliate ID in links

### Implementatie Plan:
```typescript
// 1. RapidAPI voor search
const searchHotels = async (city: string) => {
  const response = await fetch(rapidApiUrl, { headers })
  return response.json()
}

// 2. Transform data
const hotels = searchResults.map(hotel => ({
  ...hotel,
  bookingUrl: generateAffiliateLink(hotel.hotel_id)
}))

// 3. Toon resultaten met affiliate links
```

## 💰 Verdienmodel Blijft Hetzelfde
- User zoekt → Vindt hotel → Klikt affiliate link → Boekt op Booking.com
- Jij verdient 4-6% commissie
- RapidAPI kost ~$10/maand bij groei

## 🔗 Links om te Starten

1. **RapidAPI Booking**: https://rapidapi.com/tipsters/api/booking-com/
2. **Booking Affiliate**: https://www.booking.com/affiliate-program/v2/index.html
3. **Amadeus**: https://developers.amadeus.com/self-service/category/hotels

Wil je dat ik de RapidAPI integratie implementeer? Dan kunnen we binnen een uur live zijn met echte hotel data!