import React from 'react';
import { Building2, Clock, Mail, Construction } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <Building2 className="w-16 h-16 text-blue-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          dehotelvergelijker.nl
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Construction className="w-5 h-5 text-amber-500" />
          <span className="text-lg text-amber-500 font-semibold">Under Construction</span>
        </div>
        
        <p className="text-gray-600 mb-8 text-lg">
          We zijn bezig met het bouwen van de beste hotelsvergelijkingswebsite van Nederland. 
          Binnenkort kunt u hier terecht voor de beste hotelaanbiedingen.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>Binnenkort beschikbaar</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Mail className="w-5 h-5" />
            <span>info@dehotelvergelijker.nl</span>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} dehotelvergelijker.nl - Alle rechten voorbehouden
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;