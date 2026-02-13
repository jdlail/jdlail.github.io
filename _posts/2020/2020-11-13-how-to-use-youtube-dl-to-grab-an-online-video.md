---
layout: post
permalink: /2020/11/how-to-use-youtube-dl-to-grab-an-online-video/
title: How to use (yt-dlp) youtube-dl to grab an online video
description: 'yt-dlp is a popular tool for downloading videos from most of the common sites.'
date: 2020-11-13 18:16:22 -0000
last_modified_at: 2022-09-21 16:44:58 -0000
publish: true
pin: false
image:
  path: /assets/wp-content/uploads/2020/11/youtube-dl-featured-image.webp
  alt: yt-dlp can download videos from popular sites
categories:
- Video
tags:
- Training
---

**_Updated: Youtube-dl has not been updated in months, try using the actively maintained [yt-dlp](https://github.com/yt-dlp/yt-dlp)._**

Are you journalist that needs to snag a copy of a video for reporting, for use "on air" or for use in a digital video piece?

[Youtube-dl](https://youtube-dl.org/) ~~is~~ was (use [yt-dlp](https://github.com/yt-dlp/yt-dlp)) a popular tool for downloading videos from most of the common sites [that has been around for a long time](https://rg3.name/202011071352.html). Despite its name, it works not only with YouTube, but with Twitter, Facebook, and a host of other services. It is regularly updated to keep up with changes made by social media and video platforms.

Even better, while it has a lot of command-line options, it's wickedly simple to use.

It's another tool that can be used effectively even on a Chromebook, a computer not generally noted as a great tool for video work. (See my posts on [creating video slideshows](/2020/10/create-video-slideshows-with-imagemagick-and-ffmpeg-in-minutes/) and using [Google Earth Studio](/tag/google-earth/).)

There is a Windows version of the program, too.

The RIAA, the major trade association of the recording industry, [recently issued a takedown notice for youtube-dl](https://arstechnica.com/tech-policy/2020/10/github-boots-popular-youtube-download-tool-after-riaa-claim/) on the code hosting service GitHub. It argues the youtube-dl should be removed because it allows the copying of copyrighted material. However, downloads are still available and updates are still happening. (There was an update as recently as this week).

The RIAA's legal action has been [attacked as an abuse of copyright law](https://www.eff.org/deeplinks/2020/11/riaa-abuses-dmca-take-down-popular-tool-downloading-online-video), but youtube-dl is a free, open-source project so it's a David vs Goliath battle.

It has been noted that it is a [popular tool of journalists](https://freedom.press/news/riaa-github-youtube-dl-journalist-tool/). I used it to download videos we had permission to use, including user-generated content, or from government video meetings in the age of COVID-19 Zoom meetings that end up archived on YouTube or Facebook.

Here's how to use youtube-dl on a Chromebook to download a single video.

Install it from the Linux command line. (Instructions at [youtube-dl.org download page.=](https://yt-dl.org/download.html),)

Here is the most command I used:
  
    youtube-dl -f best 'URL-TO-VIDEO' \
    -o 'LOCAL-NAME-OF-VIDEO.%(ext)s'

This command attempts to grab the best version of the (-f best) and saves it with the filename of your choosing (-o 'LOCAL-NAME-OF-VIDEO.%(ext)s').

That's it. That's the most common use case. For YouTube videos, that typically results in a 1280x720 mp4 file.

If you want to check what formats are available:
  
    youtube-dl -F URL-To-VIDEO

You will get a series of available files with a code number in the first column that you could use with the -f option.

![](/assets/wp-content/uploads/2020/11/youtube-dl-available-formats-2.webp)Youtube-dl format list.

You may be able to get a "1080 version" (1920x1080) by using:
  
    youtube-dl -f bestvideo+bestaudio \
    'URL-TO-VIDEO' -o \
    'LOCAL-NAME-OF-VIDEO.%(ext)s'

My tests resulted in a "[mkv](https://www.howtogeek.com/200736/what-is-an-mkv-file-and-how-do-you-play-them/)" file.

Even with the legal action, youtube-dl will _currently_ still update with this command:
  
    youtube-dl -U

To see what version you are using, do:
  
    youtube-dl --version

Full help is available with:
  
    youtube-dl -h

The official documentation has been removed by the takedown notice, but [here is a copy of it, which shows all options](https://www.mankier.com/1/youtube-dl).

I hope that helps you get started with this powerful and fast tool.

Here's a take on the RIAA action:

{% include youtube.html id="ck7utXYcZng" %}

Please respect the rights of content creators and only use youtube-dl for legal purposes.

Resources:

[yt-dlp on Github](https://github.com/yt-dlp/yt-dlp)

[Youtube-dl form on Reddit (mostly talks about yt-dlp)](https://www.reddit.com/r/youtubedl/)
