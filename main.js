document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    //Header
    let body = document.querySelector("body"),
        header = document.createElement("header"),
        container = document.createElement("div"),
        headerInner = document.createElement("div"),
        headerTitle = document.createElement("div"),
        headerLogo = document.createElement("img"),
        headerTittleText = document.createElement("h1"),
        navigation = document.createElement("nav"),
        navigationList = document.createElement("ul"),
        navigationItem = ["li", "li", "li", "li"],
        navigationLink = ["a", "a", "a", "a"]

    
    //Add header to body
    body.append(header);
    //Add cssClass to header
    header.classList.add("header");
    header.append(container);
    container.classList.add("container");
    container.append(headerInner);
    headerInner.classList.add("headerContent");
    headerInner.append(headerTitle);
    headerTitle.classList.add("headerTittle");
    headerTitle.append(headerLogo);
    headerLogo.classList.add("headerLogo");
    headerLogo.src = "img/logo.png";
    headerTitle.append(headerTittleText);
    headerInner.append(navigation);
    navigation.append(navigationList);

    headerTittleText.textContent = "Technical knowledge";

    //Цикл на вставку li в ul и ссылок в li
    for( let item of navigationItem){
        let i,
            l,
            b=0;
        i = document.createElement(item);
        navigationList.append(i);
        l = document.createElement(navigationLink[b]);
        l.href = "#";
        i.append(l);
        b++;
    }

    navigationList.classList.add("nav");
    //Заполнение навигационных ссылок
    navigationLink = document.querySelectorAll(".nav li a");
    navigationLink[0].textContent = "Menu";
    navigationLink[1].textContent = "Support";
    navigationLink[2].textContent = "History";
    navigationLink[3].textContent = "About us";

    //Main content
    let content = document.createElement("section"),
        contentContainer = document.createElement("div"),
        contentInner = document.createElement("div"),
        sideBarBlog = document.createElement("div"),
        tabsNews = document.createElement("div")
        

        body.appendChild(content);
        content.append(contentContainer);
        contentContainer.classList.add("container");
        contentInner.classList.add("contentInner");
        contentContainer.append(contentInner);
        contentInner.append(sideBarBlog);
        sideBarBlog.classList.add("sidebarBlog");

        //Add links to  sidebar and add items to tabs
        for(let i=0; i<8; i++){
            let item,
                tabItem,
                tabTittle,
                tabText,
                tabImage;
            item = document.createElement("a");
            item.href = "#"
            sideBarBlog.append(item);
            tabItem = document.createElement("div");
            tabsNews.append(tabItem);
            tabItem.classList.add("tabsItem");
            tabTittle = document.createElement("h2");
            tabItem.append(tabTittle);
            tabTittle.classList.add("tabsTittle");
            tabText = document.createElement("p");
            tabItem.append(tabText);
            tabText.classList.add("tabsText");
            tabImage = document.createElement("img");
            tabItem.append(tabImage);
            tabImage.classList.add("tabsImage");

        };

    contentInner.append(tabsNews);
    tabsNews.classList.add("tabs");
    let tabItem = document.querySelectorAll(".tabsItem"),
        tabTittle = document.querySelectorAll(".tabsTittle"),
        tabText = document.querySelectorAll(".tabsText"),
        tabImage = document.querySelectorAll(".tabsImage");

        //Add content to first tab
        tabTittle[0].textContent = "Questions";
        tabText[0].textContent = `In this section, you can ask any question to the same 
                                  people as you. There are both beginners who need help with 
                                  some issues, and experienced people who share their experience 
                                  and solutions. Good luck!`;
        tabImage[0].src = "img/tabQuestions.jpg";

        //Add content to second tab
        tabTittle[1].textContent = "Our news";
        tabText[1].textContent = `Here is all the news that happens on the site. These are fresh topics
                                  and popular questions. And also what was added to the site as a training
                                   material`;
        tabImage[1].src = "img/tabNews.jpg";

        tabTittle[2].textContent = "Donation";
        tabText[2].textContent = `If you want to support us for our efforts and labors. We will always be 
                                  grateful to you, no matter what amount. This supports us and motivates us
                                   to continue working for you`;
        tabImage[2].src = "img/tabDonation.jpg";

        tabTittle[3].textContent = "Market place";
        tabText[3].textContent = `On the market, you can sell your individual scripts, plugins, icons and much more. No commission will 
                                  be charged from you`;
        tabImage[3].src = "img/tabMarket.jpg";

        tabTittle[4].textContent = "Tasks";
        tabText[4].textContent = `In the tasks section there are different collections for practice, so that you can try yourself in 
                                  solving any tasks, from easy to complex, thereby you pump up your skills`;
        tabImage[4].src = "img/tabTasks.jpg";

        tabTittle[5].textContent = "Word stat";
        tabText[5].textContent = `In the wordstat section, you will see the most frequently asked questions or the names of popular topics on the site. This 
                                  helps you find the necessary information faster and you are always aware of 
                                  everything that is happening`;
        tabImage[5].src = "img/tabWords.png";

        tabTittle[6].textContent = "Plugins";
        tabText[6].textContent = `Here are all the useful plugins that you may need to develop your own project. All plugins are absolutely free and working, constantly updated.
                                  All plugins are divided into sections for convenience`;
        tabImage[6].src = "img/tabPlugins.jpg";

        tabTittle[7].textContent = "Frameworks";
        tabText[7].textContent = `Different frameworks with clear instructions for installing and working with them. Also all the tutorials and useful articles for each 
                                  framework. All materials are updated daily`;
        tabImage[7].src = "img/tabFrameworks.jpg";

        
     
    
    //Заполняем sidebar     
    let sideBarLink = document.querySelectorAll(".sidebarBlog a");
    sideBarLink[0].textContent = "Questions";
    sideBarLink[1].textContent = "Our news";
    sideBarLink[2].textContent = "Donation";
    sideBarLink[3].textContent = "Market place";
    sideBarLink[4].textContent = "Tasks";
    sideBarLink[5].textContent = "Word stat";
    sideBarLink[6].textContent = "Plugins";
    sideBarLink[7].textContent = "Frameworks";

    //цикл переключения табов
    let tabSidebar = document.querySelector(".sidebarBlog"),
        tabSidebarButton = document.querySelectorAll(".sidebarBlog a"),
        tabList = document.querySelectorAll(".tabsItem");

        for(let i = 0; i < tabSidebarButton.length; i++){
            tabSidebarButton[i].classList.add("sidebarLink");
            tabSidebarButton[i].name = i;
        };

        for(let i = 0; i < tabSidebarButton.length; i++){
            tabList[i].name = i;
        };

        // Функция которая скрывает все табы кроме первого
        function hideTabItem(a) {
            for(let i = a; i < tabList.length; i++){
                tabList[i].classList.remove("tabsItem");
                tabList[i].classList.add("tabsItemNone");
            };
        };

        hideTabItem(1);

        function showTabItem(b) {
            if(tabList[b].classList.contains("tabsItemNone")){
                tabList[b].classList.remove("tabsItemNone");
                tabList[b].classList.add("tabsItem");
            }
        }

        tabSidebarButton[0].classList.add("active");

        tabSidebar.addEventListener("click", function(event){
            event.preventDefault();
            let target = event.target,
                targetName = target.name;
            target.class

            for(let i = 0; i < tabSidebarButton.length; i++){
                if(tabSidebarButton[i].classList.contains("active")){
                    tabSidebarButton[i].classList.remove("active");
                }
                tabSidebarButton[targetName].classList.add("active");
            }

            for (let i = 0; i < tabList.length; i++){
                    hideTabItem(0);
                    showTabItem(targetName);
                    break;
                }            
        });

    //footer
    let footer = document.createElement("footer"),
        footerContainer = document.createElement("div"),
        footerContent = document.createElement("div"),
        footerContacts = document.createElement("div"),
        footerRights = document.createElement("div"),
        footerTittles = ["Mobile contacts", "Social contacts", "Email contacts"],
        mobile = ["+7(999)653-72-45", "+7(999)888-23-22"],
        social = ["instagram.png", "vk.png", "twitter.png"],
        email = ["technical_noledge@gmail.com", "tnoledge@mail.ru"],
        nameClass = ["contactsMobile", "contactsSocial", "contactsEmail"];

        body.append(footer);
        footer.classList.add("footer");
        footer.append(footerContainer);
        footerContainer.classList.add("container");
        footerContainer.append(footerContent);
        footerContent.classList.add("footerContent");
        footerContent.append(footerContacts);
        footerContacts.classList.add("footerContacts");
        footerContent.append(footerRights);
        footerRights.classList.add("footerRights");

        for(let i = 0; i < footerTittles.length; i++){
            let item,
                tittle;
            item = document.createElement("div");
            item.classList.add(nameClass[i]);
            tittle = document.createElement("h3");
            footerContacts.append(item);
            item.append(tittle);
            tittle.textContent = footerTittles[i];
        };


    let footerContactFirst = document.querySelector(".contactsMobile"),
        footerContactSecond = document.querySelector(".contactsSocial"),
        footerContactThirty = document.querySelector(".contactsEmail")

        for(let i = 0; i < mobile.length; i++){
            let item = document.createElement("p");
            footerContactFirst.append(item);
            item.textContent = mobile[i];
        }

        for(let i = 0; i < social.length; i++){
            let item = document.createElement("img");
            footerContactSecond.append(item);
            item.src = "img/" + social[i];
        }

        for(let i = 0; i < email.length; i++){
            let item = document.createElement("p");
            footerContactThirty.append(item);
            item.textContent = email[i];
        }

        footerRights.innerHTML = "All rights reserved. Created by <span>Alex</span>. Year 2021";
  });   