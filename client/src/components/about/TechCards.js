
import reactImg from "../../assets/react.png";
import jquery from "../../assets/jquery.jpg";
import css from "../../assets/css.png";
import html from "../../assets/html.png";

import node from "../../assets/nodejs-1-logo.png";
import cSharp from "../../assets/csharp.png";
import sql from "../../assets/sql.png";

import azure from "../../assets/azure.png";
import aws from "../../assets/aws.png";
import git from '../../assets/git.png'


const techCards = {
  morning: {
    techCards: [
      {
        title: "React",
        image: reactImg,
        text:
          "React is my strongest front end development skill. Everything from writing custom hooks, lifecycle methods, and state management with Redux are all well within my skillset"
      },
      {
        title: "jQuery",
        image: jquery,
        text:
          "When I am not using React, I'll turn to jQuery. jQuery is tried and true method of DOM manipulation, and event handling. I'm experienced with managing event handlers, complex selectors, and all manner of ajax requests."
      },
      {
        title: "CSS",
        image: css,
        text:
          "While I don't claim to be a designer, I believe intelligent use of CSS is an extremely important skill. I'm confident in managing animations, pseudo-selectors, and maintaining class schemes in order to easily style my applications."
      },
      {
        title: "HTML5",
        image: html,
        text:
          "A solid understanding of the DOM is an integral skill in terms of web development. Everything from accessibility, SEO, and of course general page layout is part of HTML5 understanding, and I believe can often be overlooked for it's simplicity. "
      }
    ],
    tagline: "Somewhere around mid-morning...",
    title: "My dive into the realm of the front end",
    intro:
      "One major part of my job as a software developer is to work on the front end of applications. The following are some of my skills when it comes to front end development"
  },
  afternoon: {
    techCards: [
      {
        title: "NodeJS",
        image: node,
        text:
          "NodeJS continues to surprise me in terms of it's fleixibilty. I find I am always learning more about it's event loop, how to manage 'multithreading', and continually find ways to solve just about any problem I can imagine (ESPECIALLY authentication...). Not to mention the use of ES6 syntax, webpack, and babel provide an endless supply of topics to learn about."
      },
      {
        title: "C#",
        image: cSharp,
        text:
          "C# has been my major introduction into object-oriented programming. While I am not quite as proficient as I am in Javascript, I find 'Microsoft Java' to be incredibly powerful. From LINQ, to the use of DataTables, I'm happy as ever to expand my skillset into one of the most powerful tools made available to me."
      },
      {
        title: "SQL",
        image: sql,
        text:
          "I've heard SQL described as a 'swiss army knife with thousands of tools', while I won't claim to know how to use each and every tool available, I will say I am proficient with the major ones. Joins in all directions, ordering, and juggling all kinds of foreign and primary keys are all skills I've learned. After all, what good is an application if you can't access your data?"
      }
    ],
    tagline: "In the Afternoon...",
    title: "It's time to jump into the back end",
    intro:
      "As a full stack developer, I also have the privilege of working on the code most people don't get to see. I find back end development equally challenging, but even more rewarding. Less time worrying about the size of the window, and more time worrying how to protect sensitive data, and optimize database queries."
  },
  evening: {
    techCards: [
        {
          title: "Azure",
          image: azure,
          text:
            "Azure is my newest, and most powerful Dev Ops tool I've had the privilege to work with. Out of the (seemingly) endless services Azure provides, I've worked with Azure build pipeline creation (CI/CD), Application Insights, File Storage, and git workflow"
        },
        {
          title: "AWS",
          image: aws,
          text:
            "AWS is another powerhouse resource that I've experimented with. While I won't claim to have experience in all aspects of what they offer, I have dipped my toes into a few services, including: RDS management, S3 Bucket Storage, Lambda 'Serverless' applications, and their API gateway services."
        },
        {
          title:"Git",
          image:git,
          text:"Git is almost an essential tool for my development cycle. I use git daily wether it's part of my job, or on my personal projects. The ability to push code around, share easily, and fearlessly jump into an experimental branch without worrying about screwing everything up is invaluable. While at work I follow general git good practices, using the 'branch  commit - push - pull request - merge' workflow."
        }
    ],
    title: "Towards the end of the work day",
    tagline: "Let's talk 'Dev-Ops'",
    intro: "One of the most exciting part of being a developer is sharing what you make with the world. I'm using the term 'Dev-Ops' very loosely here, but in general I'm talking about version control, build pipelines, and deployment. "
  }
};

export default techCards