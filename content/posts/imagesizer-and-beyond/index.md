---
path: /blog/imagesizer-and-beyond/
layout: post
title: ImageSizer -- and beyond(!)
date: 2010-07-28T23:10:06Z
tags:
- imagesizer
- air-applications
---

It's been a couple of years since I either started working on [ImageSizer](http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&offeringid=10740&marketplaceid=1) or it went public (I can't remember which) and development has stalled a bit - but now I feel it's time to get things back on track.  So here's the plan.

### ImageSizer, now.

![](imagesizer)

ImageSizer is now up to version 0.6.1 - not that the version numbers are anything but arbitrary, of course.  You can import images, rotate them, crop them and resize the lot and output them to your machine.  It works, but the code is a little out of date now, my code-signing certificates are out of date, and I really want to try something new.  So...

### ImageSizer, future.

Time to create ImageSizer, version 2.  Going for a full re-write on the code side of things means I'm going to try one cool thing - a desktop version and a web-based version.  The reason for the desktop version is obvious, but having a web-based version should make the functionality behind ImageSizer available for people who can't (or don't want to) install the desktop application.  Plus, trial version, and that sort of thing.

A newer code-base will also make it easier to build all of the new features into ImageSizer - there's a few suggestions and ideas that never made it to the first version before development slacked off, so those are first on the to-do list.  Things like the long-awaited Twitter and Flickr uploads, and multiple output sizes.

So, enough chit-chat. ImageSizer 2 development is underway now, and there should be some more updates on the way.

### And also...

As my code-signing certificates all went out of date, it makes it a little difficult for the automatic updates to keep everyone up to date.  The application source code is incompatible with the latest version of the Flex SDK, I want to re-architect the application source, and I think that the interface needs a complete re-think to integrate some of the newer application features.

Of course, you can still [download ImagesSizer through the AIR Marketplace.](http://www.adobe.com/cfusion/marketplace/index.cfm?event=marketplace.offering&offeringid=10740&marketplaceid=1)