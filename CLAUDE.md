# הוראות לקלוד קוד — פרויקט Portfolio Dashboard

## מה הפרויקט הזה?
דשבורד פורטפוליו אישי של Molaly Mekonen — AI Solutions Architect.
מפוצל לקבצי HTML, CSS, ו-JS עם סקריפט בדיקה + קובץ CV (`CV.pdf`).
מתארח ב-GitHub Pages בכתובת: https://urael-fanuel.github.io/molaly-portfolio/

## כללים חשובים — אל תשבור אלה!

### 1. מצב עריכה עם סיסמה
- הדשבורד מוגן בסיסמה `molaly2026`
- כפתור 🔒 בפינה שמאל תחתון פותח מצב עריכה
- אל תסיר את מנגנון הסיסמה בשום שינוי

### 2. קובץ CV
- `CV.pdf` חייב להישאר בתיקייה לצד `index.html`
- כפתור "הורד CV" מוריד אותו ישירות — אל תשנה את ה-href

### 3. קישורי LinkedIn
- הקישור הקבוע: `https://www.linkedin.com/in/molaly-mekonen-416a57111/`
- אל תמחק או תשנה אותו

### 4. localStorage
- כל הנתונים נשמרים ב-localStorage תחת המפתח `pfv4`
- אל תשנה את שם המפתח

## כללי RTL — חובה בכל שינוי

```css
/* עברית תמיד RTL */
direction: rtl;
text-align: right;
unicode-bidi: embed;

/* טקסט מעורב עברית+אנגלית */
dir="auto"  /* על אלמנטי HTML */

/* קלט */
textarea, input { direction: rtl; text-align: right; }
```

- **אסור** להשתמש ב-`unicode-bidi: bidi-override`
- **אסור** להשתמש ב-`text-align: right` בלבד ללא `direction: rtl`
- בלוקי קוד (`<code>`, `<pre>`) — תמיד LTR, אל תשנה

## מבנה הקובץ

```
portfolio-v3/
├── index.html    ← מבנה העמוד (HTML)
├── style.css     ← עיצובים ואנימציות (CSS)
├── app.js        ← לוגיקה ונתונים (JavaScript)
├── verify.js     ← סקריפט בדיקה אוטומטי
├── CV.pdf        ← קורות חיים של Molaly
└── CLAUDE.md     ← הקובץ הזה
```

## אזורים עיקריים ב-index.html

| אזור | תיאור |
|---|---|
| `.sidebar` | סיידבר ימין — פרופיל, סטטיסטיקות, כישורים, קשר |
| `.main` | תוכן ראשי — hero banner + גריד פרויקטים |
| `#ov-proj` | מודל עריכת פרויקט |
| `#ov-pin` | מודל סיסמה |
| `const DEF` | נתוני ברירת מחדל — שם, פרויקטים, קישורים |
| `function render()` | מרנדר את כל הדשבורד |
| `function saveAll()` | שומר ל-localStorage |

## פרטי הבעלים
- שם: Molaly (מוטי) Mekonen
- תפקיד: AI Solutions Architect + Production Engineer @ Intel
- אימייל: moti.marva@gmail.com
- טלפון: 052-874-2884

## פקודות בדיקה
* הרצת בדיקת סינטקס ותקינות מלאה לפני ביצוע commit/push: `node verify.js`

## לפני כל שינוי — בדוק
- [ ] הרצת `node verify.js` והבדיקות עברו בהצלחה
- [ ] RTL תקין בכל טקסט עברי חדש
- [ ] לא נשברו כפתורי CV ו-LinkedIn
- [ ] מנגנון הסיסמה עדיין עובד
- [ ] `CV.pdf` עדיין מוזכר נכון בקוד
