---
layout: post
permalink: /2008/03/mashup-fun/
title: Mashup fun
date: 2008-03-09 22:19:15 -0000
last_modified_at: 2008-03-09 22:19:15 -0000
publish: true
pin: false
categories:
- Media
tags: []
---
[![Crime map](/images/crimemap-thumb-150x105.webp)](/images/crimemap.webp)Enjoyed learning a bit about transforming XML documents with XSLT in doing some homicide mashup maps for a series of stories reporter Matt Lakin is doing.  
  
He had complied homicide cases since 2000 into two OpenOffice Calc (Excel compatible) spreadsheets. I converted the spreadsheets to XML docs, then "transformed" each XML document into an HTML file and an XML file in Yahoo's map format using a simple perl program (all my perl programs are simple) and an XSLT stylesheet.  
  
One gotcha I ran into was that the same spreadsheets saved by Excel and OpenOffice produced different XML for the date field and another field with using XML||Excel in perl. I'll have to look at that some more.  
  
I did run into some issues of things I didn't know how to do in XSLT stylesheets, but I worked around them and I did have to clean up some addresses in Yahoo..  
  
I used [XML and Perl](https://www.amazon.com/gp/search?ie=UTF8&keywords=0735712891&tag=wwwjacklailco-20&index=books&linkCode=ur2&camp=1789&creative=9325)![](https://www.assoc-amazon.com/e/ir?t=wwwjacklailco-20&l=ur2&o=1) by Mark Riehl and Ilya Sterin to learn how to do this. It's a good introduction, but you'll need a book about XSLT if you want to do more than scratch the surface.  
  
The results:  
  
[Knoxville homicides](https://web.knoxnews.com/map/crimemap/knoxville.shtml)  
  
[Knox County homicides](https://web.knoxnews.com/map/crimemap/knoxcounty.shtml)
