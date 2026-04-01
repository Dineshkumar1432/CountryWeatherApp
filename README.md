# 🌍 Country Weather App

A dynamic web application built using Angular that allows users to search for countries and view detailed information along with real-time weather data.

---

## 🚀 Features

* 🔍 Search countries in real-time
* 🌐 Display country details (flag, capital, population, region)
* 🌦️ Fetch live weather data based on country location
* ⚡ Fast and responsive UI
* 🔄 Toggle between list view and detailed view
* 📱 Clean and user-friendly interface

---

## 🛠️ Tech Stack

* **Frontend:** Angular (Standalone Components)
* **Languages:** TypeScript, HTML, CSS
* **API Integration:**

  * REST Countries API
  * OpenWeatherMap API
* **Tools:** VS Code, Git, GitHub

---

## 📂 Project Structure

```
src/
 ├── app/
 │   ├── country/
 │   │   ├── country.ts
 │   │   ├── country.html
 │   │   ├── country.css
 │   ├── api.ts
 │   ├── app.ts
 │   ├── app.config.ts
 │   ├── app.routes.ts
 ├── index.html
 ├── main.ts
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-username/CountryWeatherApp.git
```

2. Navigate to project folder:

```
cd CountryWeatherApp
```

3. Install dependencies:

```
npm install
```

4. Run the application:

```
ng serve
```

5. Open in browser:

```
http://localhost:4200
```

---

## 🔑 API Configuration

This project uses OpenWeatherMap API.

* Get your API key from: https://openweathermap.org/api
* Replace the API key in `api.ts`:

```
private weatherApiKey = 'YOUR_API_KEY';
```

---

## 📸 Screenshots

(Add screenshots here for better presentation)

---

## 📌 Future Improvements

* 🔄 Add loading spinner
* 🔍 Debounce search for better performance
* 📊 Add more country details (currency, languages)
* 🌙 Dark mode support
* 🚀 Deploy to cloud (Netlify / Vercel)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Author

**Dinesh Kumar**

* GitHub: https://github.com/Dineshkumar1432

---

⭐ If you like this project, don’t forget to give it a star!
