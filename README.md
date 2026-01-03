# Pomodoro Timer ⏱️

A simple Pomodoro timer built with **React**.  
Includes focus mode, short rest, long rest, start / pause, reset, and sound effects.

Click the link to try it out: 
https://pomodoro-timer-chi-lilac.vercel.app

## Features
- 25-minute focus timer
- 5-minute short rest
- 15-minute long rest
- Start / Pause / Reset controls
- Audio notification when time is up
- Dynamic background based on mode

## Tech Stack
- React (Vite)
- JavaScript
- CSS

## How It Works
- The timer is driven by React state
- `useEffect` controls the countdown interval
- Reset restores the timer to the selected mode duration
- Audio plays when the countdown reaches `0:00`
