---
layout: post
permalink: /2022/10/essential-photo-video-productivity-tools/
title: Essential photo, video, productivity tools
description: None
date: 2022-10-19 15:36:48 -0000
last_modified_at: 2022-10-19 15:43:14 -0000
publish: true
pin: false
image:
  path: /assets/wp-content/uploads/2022/10/Screenshot-2022-10-19-11-26-50-AM.webp
  alt: Screenshot showing Visual Studio Code
categories:
- Ramblings
- Video
tags:
- Chromebook
- Linux
- photos
- Tools
- Video
---
This is a listing of programs I use regularly on my Pixelbook, a Chromebook introduced in 2017. That is to say it's not the most powerful or fastest Chromebook and all the apps listed here work with it.

This list includes web, Chrome extensions and Linux apps. The list is partly for me to remember if, where and how to install or update them and partly in the hope that others may find it useful. Nearly all are free and most are open source.

Unless otherwise noted, Linux applications are installed via “[APT](https://www.cyberciti.biz/faq/ubuntu-lts-debian-linux-apt-command-examples/).” APT stands for Advanced Package Tool.

ChromeOS defaults to using Debian for the Linux container.

## Video

* Exiftool (metadata management)
  * Program to view/edit metadata. Host of features; great support forum.
  * (<https://exiftool.org/>)
  * Install via Git.
    * I keep under a “packages” directory.
    * cd packages
    * git clone <https://github.com/exiftool/exiftool.git>
    * cd exiftool
    * perl Makefile.Pl
    * make
    * make test
    * sudo make install
* FFmpeg
  * Robust command-line video/audio file program with tons of features and capabilities.
  * FFprobe
    * Included utility that returns a host of information about a video file.
  * (<https://ffmpeg.org/>)
* Google Earth
  * (<https://earth.google.com/web/>)
  * Google Earth Studio
    * Create custom views in Google Earth. -(<https://www.google.com/earth/studio/>)
* Handbrake
  * Graphical video transcoder.
  * Use [Flatpak](https://flatpak.org/) version
  * (<https://handbrake.fr>)
* Shotcut
  * Video editor that works with Pixelbook.
  * Use Flatpak version
  * (<https://shotcut.org/>)
* VLC Media
  * Robust video player and video utility.
  * (<https://www.videolan.org/>)

## Photo / Image

* Exiftool (metadata management)
  * Can view/edit metadata of most image file types.
  * (<https://exiftool.org>)
* Gimp
  * Full-featured image editor
  * Use [Flatpak](https://flatpak.org/) version
  * (<https://www.gimp.org/>)
* ImageMagick 7
  * Command-line image manipulation.
  * Mediainfo
    * Included utility that returns a host of information about a file.
  * ImageMagick 7 installed via this script (<https://github.com/SoftCreatR/imei>)

## Audio

* Exiftool (metadata management)
  * Supports view/editing of many types of audio files.
  * (<https://exiftool.org/>)
* FFmpeg
  * Can be used the used manipulating audio streams and files.
  * (<https://ffmpeg.org/>)
* mp4art
  * Add art to audio files.
  * Will not update, removed repository for this.
  * (<https://debian.pkgs.org/11/multimedia-main-arm64/mp4v2-utils_2.0.0-dmo6_arm64.deb.html>)
* Oceanaudio
  * Audio editor (similar to the venerable Audacity)
  * Installed via deb package.
  * (<https://www.ocenaudio.com/>)

## PDF

* Exiftool (metadata management)
  * Add/view metadata
  * (<https://exiftool.org>)
* Pandoc
  * Convert MarkDown, Word, HTML others to PDF
  * Requires LaTex
  * (<https://pandoc.org/>)
* PDF Arranger
  * Use Flatpak version
  * Add, remove, rearrange, rotate, pages
  * (<https://github.com/pdfarranger/pdfarranger>)
* Qpdf
  * Command line, can set passwords
  * (<https://qpdf.sourceforge.io/>)

## Markdown, Code, Code Management, Text Editor, Program Management

* Apt
  * (<https://wiki.debian.org/Apt>)
* Bash scripts
  * See scripts folder
  * (<https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/>)
* Caret
  * Light-weight text editor (Chrome)
  * (<https://chrome.google.com/webstore/detail/caret/fljalecfjciodhpcledpamjachpmelml?hl=en>)
* Flatpak
  * Linux tool to install/manage apps
  * (<https://flatpak.org/>)
* Git / GitHub
  * Version control and backup.
  * (<https://github.com>)
  * [GitHub for writers](https://www.howtogeek.com/438252/how-writers-can-use-github-to-store-their-work/)
  * [The Beginner’s Guide to Git](https://www.maketecheasier.com/beginners-guide-to-git/)
  * [Git Cheat Sheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
* Make
  * Automate common tasks (in addition to installing applications from source).
* Nano
  * Common Linux terminal-based text editor
* Perl
  * (<https://perl.org>)
* Visual Code Studio
  * Great code editor, including Markdown. Integrated with Github.
  * (<https://code.visualstudio.com/>)

## GPS. Mapping

* Elevation Finder
  * (<https://www.freemaptools.com/elevation-finder.html>)
* Google Earth (See above)
* Google Maps
  * (<https://www.google.com/maps>)
  * My Maps (Google)
  * (<https://www.google.com/maps/d/u/0/>)

# Link Management

* [Pinboard.in](https://pinboard.in)
  * Great tool for “bookmarks” and saved resources.

## Productivity

* Gmail, Google Contacts and Calendar.
* Google Docs / Google Drive
  * (<https://drive.google.com>)
* Google Keep
  * (<https://keep.google.com/u/0/>)
* Google Tasks
  * In Gmail
* Trello
  * (<https://trello.com/>)


