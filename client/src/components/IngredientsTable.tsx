import React from 'react';

interface Ingredient {
  name: string;
  impact: string;
  category: string;
  description?: string;
}

interface IngredientsTableProps {
  ingredients: Ingredient[];
  unknownIngredients: string[];
}

const IngredientsTable: React.FC<IngredientsTableProps> = ({ ingredients, unknownIngredients }) => {
  // Group ingredients by category
  const safeIngredients = ingredients.filter(i => i.category === 'safe');
  const cautionIngredients = ingredients.filter(i => i.category === 'caution');
  const dangerIngredients = ingredients.filter(i => i.category === 'danger');

  return (
    <div className="space-y-6">
      {/* HARMFUL INGREDIENTS (Danger) */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="text-lg font-bold text-red-700 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          HARMFUL INGREDIENTS
        </h3>
        
        {dangerIngredients.length > 0 ? (
          <ul className="space-y-2">
            {dangerIngredients.map((ingredient, index) => (
              <li key={`danger-${index}`} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-medium text-red-800">{ingredient.name}</span>
                  <p className="text-sm text-red-700">{ingredient.description || ingredient.impact}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-green-700">No harmful ingredients detected!</p>
        )}
      </div>

      {/* CAUTION INGREDIENTS (Medium Risk) */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-lg font-bold text-yellow-700 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          USE WITH CAUTION
        </h3>
        
        {cautionIngredients.length > 0 ? (
          <ul className="space-y-2">
            {cautionIngredients.map((ingredient, index) => (
              <li key={`caution-${index}`} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-medium text-yellow-800">{ingredient.name}</span>
                  <p className="text-sm text-yellow-700">{ingredient.description || ingredient.impact}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No ingredients requiring caution.</p>
        )}
      </div>

      {/* SAFE INGREDIENTS */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="text-lg font-bold text-green-700 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          SAFE INGREDIENTS
        </h3>
        
        {safeIngredients.length > 0 ? (
          <ul className="space-y-2">
            {safeIngredients.map((ingredient, index) => (
              <li key={`safe-${index}`} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-medium text-green-800">{ingredient.name}</span>
                  <p className="text-sm text-green-700">{ingredient.description || ingredient.impact}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No safe ingredients detected.</p>
        )}
      </div>

      {/* UNKNOWN INGREDIENTS */}
      {unknownIngredients.length > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            UNKNOWN INGREDIENTS
          </h3>
          
          <ul className="space-y-2">
            {unknownIngredients.map((ingredient, index) => (
              <li key={`unknown-${index}`} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{ingredient}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-2">These ingredients were found but we don't have information about them.</p>
        </div>
      )}

      {/* No ingredients found */}
      {ingredients.length === 0 && unknownIngredients.length === 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No ingredients found</h3>
          <p className="text-gray-500">
            We couldn't detect any ingredients in this image. Try uploading a clearer image of the ingredients list.
          </p>
        </div>
      )}
    </div>
  );
};

export default IngredientsTable;
