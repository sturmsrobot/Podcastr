# Podcastr 🎙️

**Podcastr** ist eine moderne, KI-gestützte Podcast-Anwendung, die entwickelt wurde, um das Erlebnis des Podcast-Hörens neu zu definieren. Diese App kombiniert fortschrittliche Funktionen wie personalisierte Empfehlungen und eine intuitive Benutzeroberfläche, die Hörern dabei hilft, neue Inhalte zu entdecken und ihre Lieblings-Podcasts zu genießen.

## 📌 Features

- **Intuitive Benutzeroberfläche**: Klare und benutzerfreundliche Navigation zum Stöbern und Verwalten von Podcasts.
- **KI-gestützte Empfehlungen**: Vorschläge basierend auf Hörgewohnheiten und Vorlieben.
- **Eingebauter Audioplayer**: Steuerungen wie Play, Pause und Fortschrittsspeicherung für ein unterbrechungsfreies Hörerlebnis.
- **Benutzerauthentifizierung**: Sichere Anmeldung und Benutzerverwaltung durch Clerk.
- **Backend-Datenmanagement**: Verwendung der Convex API zur dynamischen Verwaltung und Aktualisierung von Podcast-Daten.

## 🚀 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Convex (Serverless Backend)
- **Authentifizierung**: Clerk
- **Design & Prototyping**: Figma

## 🛠️ Installation


### 1. Repository klonen

Zuerst musst du das Repository auf deinem lokalen Computer klonen:

```bash
git clone https://github.com/DeinGitHubName/podcastr.git
cd podcastr

### 2. Abhängigkeiten installieren

Installiere alle benötigten Abhängigkeiten, die im Projekt definiert sind:

```npm install```

### 3. Umgebungsvariablen konfigurieren

	•	Erstelle eine .env-Datei im Hauptverzeichnis des Projekts.
	•	Füge deine API-Schlüssel für Convex und Clerk in die .env-Datei ein. Beispiel:

```NEXT_PUBLIC_CONVEX_KEY=dein_convex_api_schlüssel
NEXT_PUBLIC_CLERK_KEY=dein_clerk_api_schlüssel```

### 4. Entwicklungsserver starten

Starte den Entwicklungsserver mit folgendem Befehl:

```npm run dev```
Die App ist jetzt auf http://localhost:3000 verfügbar.

## 🌍 Deployment auf Vercel

Das Projekt ist für das Deployment auf Vercel konzipiert. Du kannst das GitHub-Repository einfach mit deinem Vercel-Konto verbinden, um das Projekt automatisch zu deployen.

Mit Podcastr bist du bereit, das Beste aus der Welt der Podcasts zu entdecken und zu hören!