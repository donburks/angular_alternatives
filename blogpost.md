Angular Alternatives
====

Ask any front-end developer what is the new hot thing in frameworks, and the word that will immediately spring to their lips is Angular. Given the velocity, community, and employability that mark the industry adoption of AngularJS, I wanted to take the opportunity to demonstrate some alternatives to this powerful and popular framework. 

Angular is a feature-rich, powerful, and growing framework that has the weight of Google behind it. This no doubt lends to its adoption, but isn't the only reason. The near-magical power of two-way data binding, the flexibility of dependency injection, and the modular design of Angular are all features that are acquiring adoption of this framework from all corners of the web. Arguably, Angular has done as much to change the web recently as jQuery did five or so years ago. It has fundamentally changed the way we build single-page applications, and opened a Pandora's box of potential implementations.

Of course, one cannot talk about Angular without talking about the other big kid on the block, Ember. However, the comparisons between Angular and Ember have been discussed ad nauseum. I wanted to go in a bit different direction, off of the beaten path, and look at some of the JavaScript frameworks out there. Specifically, I want to look at how they compare when it comes to ease of implementation, documentation, and functionality.

After some aggressive searching, I narrowed my considerations down to three frameworks:

* [CanJS](http://canjs.com/)
* [RegularJS](http://regularjs.github.io/)
* [VueJS](http://vuejs.org/)

The reasons for picking these three were that they seemed to be all in the spirit of MVW (Model-View-Whatever) frameworks, like Angular, included two-way data binding, and from initial inspection, relatively flexible. I considered a few others, such as [Sentinel](https://bitbucket.org/sras/sentinel.js/overview) and [Mithril](http://lhorie.github.io/mithril/) but I had very specific reasons for not going with those. Sentinel is a proof-of-concept framework in its current stage, and the idea for this article came from reading one about Mithril vs. Angular, so there was no need to re-hash that framework.

## The Exercise

In order to adequately benchmark the three frameworks, I had to set it up so that I could accomplish the same task in all three. I chose a twitter clone, which I have affectionately(?) named Bleater. The goal with each framework is going to be to create something like this:

![Bleater](http://www.donburks.com/images/bleater/bleater1.png)

This way, I have my bleats, and my form with which to add to the bleats. I get a basic count as I add/remove bleats. And I have a minimum of metadata, for now. Another rule was that I wasn't going to add any other library or framework into my app to accomplish these goals. No jQuery, no other selector engine or AJAX engine, only the tools each framework gave me. On a more academic note, this means that there are a few specific technical goals that I have for each framework, on which I will be rating them at the end of this article:

* **Component setup** - Specifically, how easy is it to set up each bleat, the form, and the overall app as modular components. 
* **Flexibility** - Could I change data sources easily? Can I move the components around without reconfiguring? 
* **Documentation** - How thorough and useful was the documentation in getting me to the point that I could achieve what I wanted to do?
* **Comfort** - Admittedly, this one is entirely subjective, but it's one of the most important factors when choosing a framework in which to work. Was I comfortable building with this? Did I feel like I could be productive?

In order to provide some measure of parity, all of the above would be graded on a 1-5 scale, for each framework, with 1 being terrible and 5 being exceptional. 

## Off we go (VueJS)

I figured I would start with Vue, as it was the one that looked like it had the least features of the three that I had chosen. Plus, it's good to start off with a bit of a challenge. Right?

I started off by reading through the guide on the VueJS site, and saw most of what I was going to need right away. What was most conspicuous to me as I read through was that really there was the `Vue()` object, and you could extend that object (with `Vue.extend()`) and that all of the components/directives that you might need in Vue came from that one simple syntax. 

When you declare the main `Vue()` object in your app, you pass it an object literal which contains...everything for your app. I found this both powerful, and slightly limiting. It was powerful in the sense that it gave me one centralized place to consolidate all the resources for my app, and made the viewing of scope much easier. However, it was more limiting, because there was no real concept of dependency injection, no way for me to integrate external dependencies. 

However, I could register my components, embed templates, and set up my data object all through this object literal, which came in handy later on. Through here, I set up the form as a separate component that would get dropped into my HTML, and embedded a template. Vue allows you to have directives pre-set in your templates which are activated once the template is rendered, which I found very useful. This allowed me to bind my input fields using the `v-model` directive directly to keys in my `data` store. 

My `bleat` template could also be registered here, which made re-use very easy, using the `v-repeat` directive in Vue. Ultimately, I was able to write clean HTML for my main page, include some ID's and classes for layout and styling, and look towards making the app actually flow together.

Because there was one master scope, it took me a bit to make the leap of making data keys for the form's fields, though once I made that leap it became easy to set up a handler to make a new bleat and add it to the list.  As well, there was a touch of syntactic confusion about what was the best way to name/reference the form module when making it a component. There's the variable name you give it when you use `Vue.extend()` to create the Vue component, and then there's the name you give it when you register it as a child component in your parent component. And those are destined to be different, if you're not careful. 

Overall, the best part of using Vue was the interconnectedness of the one super `Vue()` object. That made passing components and registering methods and callbacks nearly effortless. The UI was very slick and performant, and I could see how you could build a lot of components and directives that would enhance the functionality, but they definitely were not there out of the box.

The worst part of using Vue was the fact that not all of the methods and properties of the Vue object were well-documented, which meant that I was learning a lot by using autocomplete in the Chrome Dev Tools. Some had examples, but not all. And there wasn't even a distinction as to which were properties, which took parameters, and what their return values would be. Also, there was no selector engine or HTTP/AJAX module for Vue, so if I wanted to add such functionality into my app, I would have to code that from scratch, or include another dependency. This was a major strike for me against Vue, even though I liked how it handled scope. 