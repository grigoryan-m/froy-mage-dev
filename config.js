// ═══════════════════════════════════════════════════════════════════════
// FROYSKYY — Конфигурация Google Sheets
// ═══════════════════════════════════════════════════════════════════════
//
// ФОРМАТ ЛИСТОВ GOOGLE SHEETS:
//
// Лист "spells":       name | trauma | mana | desc | requirement
// Лист "class_skills": element | level | type | name | desc | mana | requirement
// Лист "adj_skills":   branch | type | name | desc | mana | requirement
// Лист "builds":       branch1 | branch2 | name | icon | ult_type | ult_name | ult_mana | ult_requirement | ult_desc
//
// ═══════════════════════════════════════════════════════════════════════

const SHEETS_CONFIG = {
  apiKey:        'AIzaSyBjoyPsv-IoJDGAR_QhC6Z146Tk12dZ_Hw',
  spreadsheetId: '1QeDZwKCw38xS-lD-vFASkQbeUYL3ZDTq6ykxALfLDLI',
};

// ═══════════════════════════════════════════════════════════════════════
// FROYSKYY — Конфигурация Firebase Realtime Database
// ═══════════════════════════════════════════════════════════════════════
//
// СТРУКТУРА FIREBASE:
//
// /party/{uuid}          → true   (ДМ добавляет UUID в пати)
// /logs/{pushId}         → { uuid, type, payload, confirmed }
//   type: "item"     payload: "Название предмета|2"
//   type: "reagent"  payload: "red:3,blue:1,green:0,yellow:2"
//   confirmed: false / true  (ДМ ставит true → персонаж получает уведомление)
//
// ПРАВИЛА FIREBASE (Rules):
// {
//   "rules": { ".read": true, ".write": true }
// }
// (для продакшена можно ограничить по auth, но для кампании так проще)
//
// ═══════════════════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  databaseURL: 'https://dnd-froy-a02d8-default-rtdb.europe-west1.firebasedatabase.app/',
};

