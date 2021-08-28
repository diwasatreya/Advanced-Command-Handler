<div align=center>

  
  <a href="https://github.com/discordjs">
    <img src="https://img.shields.io/badge/discord.js-v12.5.3-blue.svg?logo=npm" alt="discordjs">
  </a>

  <a href="https://github.com/diwasatreya/Advanced-Command-Handler/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-Apache%202-blue" alt="license">
  </a>

</div>

# Information
It is command handler for discord bot. You can add many commands given by most of the developer server. It supports  aliases, description, category, and usage.

## Installation
First clone the repo:
```
git clone https://github.com/diwasatreya/Advanced-Command-Handler.git
```
Host in REPLIT

[![image](https://camo.githubusercontent.com/807ef293459e367b2769d7b590e00f31e35d6b2e1c7bc4f570e37abbc3650f3c/68747470733a2f2f7265706c2e69742f62616467652f6769746875622f5a65726f446973636f72642f4769766561776179426f74)](https://repl.it/github/diwasatreya/Advanced-Command-Handler)


## Setup
- Add **TOKEN** in `.env` file and for replit users in secrets
- Add **prefix** and **developerID** in `config.json`
- Run command: `node index.js`

## Change Status
- Goto `index.js` line 99 then you can change it to **idle**, **online**, **dnd** and **offline**.

## Changing
- Goto `commands folder` and change **Category 1** and **Category 2** into category name like `Fun`, `Info`, `Moderation` etc.

## Changing message when bot is mentioned
- Goto `index.js` and change from 34 line numberto 44 line.
