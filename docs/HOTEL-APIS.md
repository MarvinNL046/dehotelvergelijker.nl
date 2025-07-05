# Hotel API's & Affiliate Programma's Guide

## 🚀 Quick Start Opties

### Optie 1: Travelpayouts (Makkelijkst)
**Perfect voor beginners - Booking.com inventory**

1. **Aanmelden**: https://www.travelpayouts.com/
2. **API Access**: Direct na goedkeuring
3. **Commissie**: ~4% per boeking
4. **Voordelen**:
   - Booking.com hotels
   - Eenvoudige API
   - White label oplossing
   - Geen minimum traffic vereist

```javascript
// Voorbeeld Travelpayouts API
const searchHotels = async (city, checkIn, checkOut) => {
  const response = await fetch(
    `https://api.travelpayouts.com/v2/lookup/hotels?query=${city}&lang=nl&limit=30`,
    {
      headers: {
        'X-Access-Token': process.env.TRAVELPAYOUTS_TOKEN
      }
    }
  );
  return response.json();
};
```

### Optie 2: RapidAPI (Meer Flexibiliteit)
**Aggregeert meerdere providers**

1. **Aanmelden**: https://rapidapi.com/
2. **Beschikbare API's**:
   - Booking.com Search
   - Hotels.com
   - Agoda
   - Airbnb (unofficial)
3. **Kosten**: Pay-per-call of maandelijks
4. **Commissie**: Via affiliate links

```javascript
// RapidAPI Booking voorbeeld
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

const searchBookingHotels = async (destId, checkIn, checkOut) => {
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/search?
    dest_id=${destId}&
    dest_type=city&
    checkin_date=${checkIn}&
    checkout_date=${checkOut}`;
    
  const response = await fetch(url, options);
  return response.json();
};
```

### Optie 3: Direct Affiliate Programs
**Voor gevorderde gebruikers**

#### Booking.com Partner Program
- **URL**: https://www.booking.com/affiliate-program
- **Vereisten**: 
  - Bestaande website met traffic
  - Goedkeuringsproces (kan weken duren)
- **API**: Zeer beperkt, meestal alleen deeplinks
- **Commissie**: 25-40% van Booking's fee

#### Expedia Partner Solutions (Hotels.com)
- **URL**: https://partner.expediagroup.com/
- **API**: Rapid API voor partners
- **Commissie**: 3-7%
- **Voordeel**: Betere API toegang

## 🛠️ Implementatie Strategie

### Fase 1: Start met Travelpayouts
```typescript
// src/services/hotel-providers/travelpayouts.ts
export class TravelpayoutsService {
  private token = process.env.TRAVELPAYOUTS_TOKEN;
  
  async searchHotels(params: SearchParams) {
    // 1. Zoek hotels
    const hotels = await this.fetchHotels(params.destination);
    
    // 2. Check prijzen
    const availability = await this.checkPrices(
      hotels.map(h => h.id),
      params.checkIn,
      params.checkOut
    );
    
    // 3. Genereer affiliate links
    return this.addAffiliateLinks(hotels, availability);
  }
  
  private generateAffiliateLink(hotelId: string): string {
    const marker = process.env.TRAVELPAYOUTS_MARKER;
    return `https://tp.media/r?marker=${marker}&p=4&u=https%3A%2F%2Fwww.booking.com%2Fhotel%2F${hotelId}`;
  }
}
```

### Fase 2: Voeg Meerdere Providers Toe
```typescript
// src/services/hotel-aggregator.ts
export class HotelAggregator {
  private providers = [
    new TravelpayoutsService(),
    new RapidAPIService(),
    // Later: new BookingDirectService()
  ];
  
  async search(params: SearchParams) {
    // Parallel search across providers
    const results = await Promise.all(
      this.providers.map(p => p.searchHotels(params))
    );
    
    // Merge and deduplicate
    return this.mergeResults(results);
  }
}
```

## 💰 Verdienmodel

### Commissie Structuur
- **User** zoekt hotel → **Jouw site** toont resultaten → **User klikt** → **Booking.com** → **User boekt**
- **Jij verdient**: 3-6% van kamerprijs
- **Voorbeeld**: €100/nacht × 3 nachten × 4% = €12 commissie

### Optimalisatie Tips
1. **Cache prijzen**: 1-4 uur (bespaar API calls)
2. **Toon meerdere providers**: Hogere conversie
3. **Focus op populaire bestemmingen**: Amsterdam, Parijs, Barcelona
4. **SEO content**: "Beste hotels in [stad]" pages

## 🚦 Roadmap

1. **Week 1-2**: Travelpayouts integratie
2. **Week 3-4**: Homepage & zoekfunctie
3. **Maand 2**: SEO & content
4. **Maand 3**: Meerdere providers
5. **Maand 4+**: Optimalisatie & A/B testing

## ⚠️ Belangrijke Notities

1. **API Limieten**: Respecteer rate limits
2. **Caching**: MOET voor performance
3. **Compliance**: Toon duidelijk dat het affiliate links zijn
4. **Updates**: Providers veranderen API's regelmatig

## 🔗 Nuttige Links

- Travelpayouts Docs: https://support.travelpayouts.com/hc/en-us
- RapidAPI Hub: https://rapidapi.com/category/Travel
- Booking.com Partner: https://partner.booking.com/
- Expedia Partner: https://partner.expediagroup.com/