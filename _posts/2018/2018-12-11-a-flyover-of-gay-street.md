---
layout: post
permalink: /2018/12/a-flyover-of-gay-street/
title: A flyover of Gay Street
description: None
date: 2018-12-11 18:05:11 -0000
last_modified_at: 2022-09-21 16:40:16 -0000
publish: true
pin: false
categories:
- Video
tags:
- Google Earth
- Google Earth Studio
---
{% include youtube.html id="eytLvvscBIU" %}
I'm experimenting with Google Earth Studio, the new web-based animation tool for Google Earth. I suspect it replaces the aging Google Earth Pro desktop program. It certainly appears more powerful.

It''s awesome!

One issue I had was how to make the animation a video. Studio exports files as JPG frames and Google suggests using Adobe Media Encoder or Adobe After Effects to create a video. Both are a bit pricey for me.

My solution is to use [FFmpeg](https://www.ffmpeg.org/), an open source old-school, command-line program.

I'm a FFmpeg command-line newbie so you may have a better command line than this, But after Googling, this is what I used:
  
    ffmpeg -r 30 -start_number 000 -i \
    "file-name_%03d.jpeg" -s 1920x1080 \
    -vcodec libx264 output.mp4

That command line string translates to 30 frames per second, starting with the image number 000 and incrementing up to number 001, 002, etc (the %03d part), and creating a video at a resolution of 1920x1080 (the same resolution Google Earth Studio rendered the animation), and outputting it as an mp4 file.

[FFmpeg](https://ffmpeg.org/) has a dizzying number of options so you may be able to improve upon the options used here. However, to my eye, the output matched what I got with the trial version of Adobe Media Encoder.

Resources:

<https://trac.ffmpeg.org/wiki/Slideshow>

