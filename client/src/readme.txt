Table of contents:
    Folder structure guide
    Styling structure/rules




_boilerplate -> sandbox -> feature -> page/dashboard


Folder structure guide:

--pages
    The pages folder now only contains one file per page and the reason for this is that all the logic for the features on the pages are in the features folder.
    This means that the files in the pages folder are actually quite simple since they just glue together a few feature components and some general components.

--components


--features


--layouts
    This one is really simple. This is just a special folder for placing any layout based components. This would be things like a sidebar, navbar, container, etc. If your application only has a handful of layouts then this folder really isn't needed and you can just place the layout components in the components folder, but if you have multiple different layouts used across your application this is a great place to store them.

--lib
    The lib folder is another fairly simple folder. This folder contains facades for the various different libraries you use in your project. For example, if you use the axios library then this folder would contain a file for that axios library that creates your own API overtop of the axios API which you then use in your application. This means that instead of importing axios directly in your project you would import the file from this folder associated with axios.
    Doing this makes is much easier to update, and replace libraries since all the library specific code is in one place in your application. It also makes it easier to customize third party libraries to your own need. This pattern is called the Facade Pattern.

--services
    This folder contains all your code for interfacing with any external API. Generally, on larger projects you will have many different APIs you need to access and this folder is the place to put the code that interacts with those APIs. Again this helps clean up your code since instead of littering a bunch of API interaction code in your application it is all within this one folder.




Styling structure/rules:
