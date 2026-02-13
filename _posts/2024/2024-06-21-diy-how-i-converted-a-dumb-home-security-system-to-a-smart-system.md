---
layout: post
permalink: /2024/06/diy-how-i-converted-a-dumb-home-security-system-to-a-smart-system/
title: 'DIY: How I converted a dumb home security system to a smart system'
description: 'How I converted a more than 30-year-old dumb home security system to a smart system controlled by a phone app and tablets.'
date: 2024-06-21 19:45:55 -0000
last_modified_at: 2024-06-26 04:36:21 -0000
publish: true
pin: false
image:
  path: /assets/wp-content/uploads/2024/06/wall-mounted-samsung-a7-IMG-2450-scaled.webp
  alt: Samsung Galaxy A7 tablet
categories:
- DIY
tags: [Home Security]
---
This month I replaced an ancient security alarm system with a combination of DIY solutions.

The result is a cloud-connected system that can be armed and disarmed from anywhere and that sends push alerts and texts on an intrusion. And just like the old system, it has a loud siren to alert neighbors.

## **An Ademco security alarm system**

I had an [Ademco Vantage 4110](https://citiguard.com.au/wp-content/uploads/2017/04/Ademco-4110-User-Manual.pdf) security system with no remote monitoring, only the siren to alert neighbors. The backup battery had long been bypassed, but was still in the control panel.

These systems are known for just working so the fact that it was still working after more than 30 years wouldn't surprise those who work with them. But it works in a completely dumb way and has no ability to be remotely monitored via an app.

Two other issues pushed me to a replacement: 1) I was worried about the aging softball-sized transformer and 2) the wired magnet contact sensor on a door was lost when the door was replaced. The wiring was somewhere behind the new door frame.

Time for something new.

![Ademco 1440 security system](/assets/wp-content/uploads/2024/06/ademco-1440-security-system-IMG-2422-scaled.webp)

## **A new system: WiFi and cloud connectivity**

I opted for a[Konnected Alarm Panel Pro](https://konnected.io/products/konnected-alarm-panel-wired-alarm-system-conversion-kit?utm_source=Google&utm_medium=PPC&utm_campaign=Search-Trademark+Products-Alarm&utm_term=konnected%20alarm%20panel%20pro&utm_campaign=Search_Trademark+Products&utm_source=adwords&utm_medium=ppc&hsa_acc=2662980670&hsa_cam=20497989024&hsa_grp=158607936448&hsa_ad=671879908723&hsa_src=g&hsa_tgt=kwd-1051046997985&hsa_kw=konnected%20alarm%20panel%20pro&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwydSzBhBOEiwAj0XN4LyB4y4qtC_f950sSMXMHsFrAeNouJGKHRPiFNWQ9di5lPxv0v7wJhoCBwgQAvD_BwE) 12-Zone Conversion Kit. The conversion kit, more aptly named "replacement kit," changes everything except the wiring. The Ademco system had six zones so that would easily work. My system did not have smoke alarms, water leak detection, or temperature sensors,, or even motion detectdors, just wired magnetic open/close sensors.

The original installers of our system did a great job of labeling wires with numbers and listing those on a sheet as well as describing zones. Kudos to them. That made the switch over easier.

Connecting the Konnected board to the WiFi, getting a firmware update and connecting to Konnected cloud service and app were easy. Zones are defined in the app and apparently sync back to the board and to integrations.

Moving the wiring from the Ademco board to the Konnected board is done by just following the directions from Konnected on where the wires go.

Magnetic magnetic "stand-offs" mount the board in the old alarm system metal box. Small board in a big box.

My old siren drew too many watts (30) to be driven by the Konnected board and was replaced in the crawl space with a 20 watt siren, which is also loud.

## **Connecting to Smartthings**

Konnected currently offers no way to monitor or control its security system, but instead has integrations with third-party smart home automation systems, the most popular are the locally hosted "[Home Assistant](https://www.home-assistant.io/)" and the cloud-based [Smartthings](https://www.samsung.com/us/smartthings/) from Samsung.

I chose for the [Smartthings solution](https://konnected.io/pages/smartthings) and the Konnected app made it super easy to connect its system to the "[Home Monitor](https://www.samsung.com/us/support/answer/ANS00078857/)" in Smartthings. The extensive tweaking that can be done in Home Assistant was more than I wanted to tackle, particularly since I have standardized on Google Home with a [Google Nest hub](https://store.google.com/us/product/nest_hub_2nd_gen?hl=en-US) and [Matter over Thread](https://www.theverge.com/23165855/thread-smart-home-protocol-matter-apple-google-interview)smart devices (where possible).

## **A wireless Matter over Threads door sensor**

The Konnected boards don't support wireless contact sensors so the solution for the new door was a [Aqara P2 Door and Window Sensor](https://www.aqara.com/us/product/door-and-window-sensor-p2/) with Matter and Thread support.

The Aqara sensor needed a Matter-enabled Smartthings hub to show up in the Smartthings platform. I chose the [Smartthings Station](https://www.theverge.com/23584507/samsung-smartthings-station-review-smart-home-hub-matter-thread), which is half the price of the Smartthings hub and doubles as a charger for Galaxy phones I don't own. It doesn't support as many protocols, notably Z-Wave, as full Smartthings hubs, but since I am standardizing on Matter and Thread, it meets my needs.

Since the Aqara sensor supports Matter over Thread, I did not need Aqara hub, the door sensor connected to the Smartthings Station without a hitch and shows in the Home Monitor as part of the security system along with the sensors from the Konnected system.

## **Home Monitor in Smartthings**

![](/assets/wp-content/uploads/2024/06/smartthings-IMG-001-1.webp)

From the Smartthings app, the system can be armed with ["away: or "stay"](https://www.homesecure.ie/blog/stay-and-away-mode-on-your-alarm-system/) modes and disarmed. If allowed location access on your phone, it [can work as a presence sensor](https://www.youtube.com/watch?v=70f9MkB-cOs), arming the system if both my phone and my wife's phone leave and disarming the system if either phone arrives.

Automations and devices in Smartthings can be set to show up in Google Home and can be used with [Google Assistant voice commands](https://www.samsung.com/hk_en/support/apps-services/connect-devices-connected-to-other-services-google-home-alexa-to-the-smartthings-app/).

## **Keypads to smart tablets**

I replaced the old Ademco keypads with [Samsung A7 tablets](https://www.reddit.com/r/samsung/comments/1505t7q/i_bought_a_samsung_a7_tablet_and_im_blown_away_by/) from Walmart using the old keypad wiring to reach a power supply at the security system control box. The Konnected boards can only supply enough juice for one tablet so I used an old Tivo power supply with a DC power screw adapter to power the tablets.

Unlike examples of Home Assistant dashboards, my dashboard is really simple. It defaults to showing Smartthings with Home Monitor as the only option (all my other smart devices are in Google Home and I've chosen not add them to both at this time).

I can access Google Home from the tablets.

I am using the Android app "[Fully Kiosk](https://www.fully-kiosk.com/en/)" to manage power, screensaver, and what apps are displayed on the tablet and launch Smartthigns by default.

"Fully Kiosk" has so many options it can be confusing and its documentation is replete with misspellings, extra words, and nonsensical phrases. But it has powerful features such as turning on the screen when it detects motion, hears sounds or is touched (motion).

Of note, this setup system does not require the tablets; I just wanted to replace the old non-working keypads. Everything can be controlled from the Smartthings app on the phone, which we have installed on both phones. The tablets with wall mounts, power converters, etc. added nearly $300 to the cost.

## **Using phones as presence sensors**

One of the things Smartthings is not capable of doing that the old system did, is delaying activating the alarm on exit. Seems simple even for 30-year-old dumb devices, but alas no.

In our old system, after arming, you had time to leave the house before the armed system was active.

Smartthings Home Monitor immediately arms the system so it needs to be turned on after you are outside the house or use presence sensing to have the phone automatically arm/disarm the system. On entry, you can set a delay, mine is set at 45 seconds delay before the siren sounds. It immediately sends push alerts and text messages when a door or window is opened.

## **What I needed for a new security system**

So here is the full equipment list for this conversion (purchased from Konnected unless otherwise noted):

* Konnected Alarm Panel Pro 12-Zone Conversion Kit
* Magnetic Standoffs
* DSC Dual Tone Directional Attic Siren
* Aqara P2 Door Sensor (Amazon)
* Samsung - SmartThings Station with Power Adapter - Black (Best Buy)
* 3D printed tablet frame by Jason Thomas (2) (sold by Konnected)
* 12V to 5V USB Power Converter (2)
* DC Power Screw Terminal Adapter
* Samsung A7 Lite Tablet (2) (Walmart)
* Small Wire Connectors (Lowe's)
* Screws and dry wall anchors (Lowe's)
* Flat Plug Extension Cord (wall mounted next to box with 2 powers adapters) (Amazon)
* Fully Kiosk License (2) (via Google Play store)

Total cost was $695.

In addition, support from Konnected was fantastic, prompt with helpful advice.

## **What could go wrong?**

There are risks going this route. While no monthly subscription or contract is required, this system relies on the very small Konnected staying in business and behemoth Samsung staying committed to Smartthings. And all the cloud components from both companies continuing to work and hopefully remaining free.
