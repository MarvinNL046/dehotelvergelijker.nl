# Affiliate Strategie: Data + Commissies Combineren

## 🎯 Het Probleem
- **API's** geven data maar GEEN commissies
- **Affiliate programma's** geven commissies maar GEEN API
- Je hebt BEIDE nodig!

## 💡 De Oplossing: Combineer Ze!

### Stap 1: Data API (kies één)
- **RapidAPI Booking.com**: Voor hotel data
- **Amadeus API**: Voor hotel data
- **OF**: Begin met statische data

### Stap 2: Affiliate Programma's (meld je aan bij ALLE)
1. **Booking.com Partner Program**
   - URL: https://www.booking.com/affiliate-program
   - Commissie: 4-6%
   - Cookie: 30 dagen
   - Betaling: Maandelijks

2. **Hotels.com (Expedia) Affiliate**
   - URL: https://www.expediaaffiliate.com/
   - Commissie: 3-5%
   - Cookie: 7 dagen
   - Via Commission Junction (CJ)

3. **Agoda Partners**
   - URL: https://partners.agoda.com/
   - Commissie: 4-7%
   - Beste voor Azië

4. **TripAdvisor Affiliate**
   - Via Travelpayouts of CJ
   - Commissie: 50% van wat zij krijgen

## 🔧 Implementatie

```javascript
// services/affiliate-links.ts

export class AffiliateLinks {
  // Jouw affiliate IDs (krijg je na goedkeuring)
  private bookingAffiliateId = '123456'
  private hotelsComCid = '789012'
  private agodaCid = '345678'
  
  generateBookingLink(hotelId: string, checkIn: string, checkOut: string) {
    // Optie 1: Direct hotel link (als je hotel ID hebt)
    return `https://www.booking.com/hotel/nl/${hotelId}.html?aid=${this.bookingAffiliateId}&checkin=${checkIn}&checkout=${checkOut}`
    
    // Optie 2: Search results link (als je alleen hotel naam hebt)
    return `https://www.booking.com/searchresults.html?ss=${hotelName}&aid=${this.bookingAffiliateId}&checkin=${checkIn}&checkout=${checkOut}`
  }
  
  generateHotelsComLink(hotelId: string, checkIn: string, checkOut: string) {
    return `https://nl.hotels.com/ho${hotelId}?q-check-in=${checkIn}&q-check-out=${checkOut}&cid=${this.hotelsComCid}`
  }
  
  generateAgodaLink(hotelId: string) {
    return `https://www.agoda.com/partners/partnersearch.aspx?cid=${this.agodaCid}&hid=${hotelId}`
  }
}
```

## 📊 Werkend Voorbeeld

```typescript
// 1. Haal hotel data van API
const hotelsFromAPI = await fetch('rapidapi-booking.com/search?city=amsterdam')

// 2. Voeg affiliate links toe
const hotelsWithAffiliates = hotelsFromAPI.map(hotel => ({
  ...hotel,
  affiliateLinks: {
    booking: affiliateService.generateBookingLink(hotel.id, checkIn, checkOut),
    hotels: affiliateService.generateHotelsComLink(hotel.id, checkIn, checkOut),
    agoda: affiliateService.generateAgodaLink(hotel.id)
  }
}))

// 3. Toon in UI met meerdere opties
<div className="hotel-card">
  <h3>{hotel.name}</h3>
  <p>Vanaf €{hotel.price}</p>
  <div className="booking-options">
    <a href={hotel.affiliateLinks.booking} target="_blank">
      Bekijk op Booking.com
    </a>
    <a href={hotel.affiliateLinks.hotels} target="_blank">
      Bekijk op Hotels.com
    </a>
  </div>
</div>
```

## 🚀 Snelste Route naar Inkomsten

### Week 1: Basis Setup
1. Maak simpele hotel lijst (10-20 populaire hotels)
2. Meld aan voor Booking.com affiliate
3. Genereer search links (geen API nodig!)

### Week 2-3: Verbeter
1. Voeg RapidAPI toe voor echte prijzen
2. Meld aan voor meer affiliate programma's
3. A/B test welke het beste converteert

### Maand 2+: Schaal op
1. Meer steden/hotels
2. Price comparison features
3. Email alerts voor prijsdalingen

## ⚠️ Belangrijke Tips

1. **Start SIMPEL**: Alleen Booking.com affiliate + basis search links
2. **Multi-partner**: Toon meerdere booking opties (hogere conversie)
3. **Transparantie**: Vermeld dat het affiliate links zijn
4. **Cookie Dropping**: Niet doen! (tegen de regels)

## 💰 Realistisch Inkomen

- **100 clicks/dag** × **2% conversie** × **€100 avg booking** × **5% commissie** = **€10/dag**
- **€300/maand** met bescheiden traffic
- Schaalbaar tot €1000+ met goede SEO

## 🎯 Actieplan

1. **NU**: Meld aan voor Booking.com Partner Program
2. **Deze week**: Maak eerste versie met search links
3. **Volgende week**: Voeg API toe voor betere UX
4. **Daarna**: Optimaliseer voor conversie