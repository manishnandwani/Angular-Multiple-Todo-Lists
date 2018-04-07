angular.module("todoapp",['ngRoute'])
    .config(config)
    .controller('homeCtrl',homeCtrl)
    .controller('comCtrl',comCtrl)
    .controller('shopCtrl',shopCtrl)
   .controller('studyCtrl',studyCtrl)
   .controller('travelCtrl',travelCtrl)
   .factory('data',data)


    function config($routeProvider)
    {
        $routeProvider
        .when("/home",{
            templateUrl:'partials/home.html',
            controller:'homeCtrl',
            controllerAs:'home'
        })
        .when("/common",{
            templateUrl:'partials/common.html',
            controller:'comCtrl',
            controllerAs:'com'
        })
        .when("/shopping",{
            templateUrl:'partials/shopping.html',
            controller:'shopCtrl',
            controllerAs:'shop'
        })
        .when("/study",{
            templateUrl:'partials/study.html',
            controller:'studyCtrl',
            controllerAs:'study'
        })
        .when("/travel",{
            templateUrl:'partials/travel.html',
            controller:'travelCtrl',
            controllerAs:'travel'
        })
        .otherwise({redirectTo:"/home"})
    }

    function homeCtrl(data)
    {
        var home=this
        console.log("home")
        
        home.data=data
        console.log(data) 
        console.log(home.data) 
        home.add=function()
        {
            home.data.push(home.newList)
            console.log(home.data)           
        }

        home.delTask=function(id)
        {
            home.tasks.splice(fetchIndex(id),1)
        }

        function fetchIndex(id)
        {
            var index
            for(var i=0;i<home.tasks.length;i++)
            {
                if(home.tasks[i].id==id)
                {
                    index=i
                }

            }
            return index
        }

        home.check=function(id)
        {
            home.tasks[fetchIndex(id)].status=!home.tasks[fetchIndex(id)].status
        }
        
    }

    function comCtrl(data)
    {
        var com=this
        console.log(data)

        com.tasks=[]

        com.addTask=function()
        {
            var d=new Date()
            var obj= { id:d.getTime() , name: com.item , status:false, time:new Date()}
            com.tasks.push(obj)
            console.log(com.tasks)
        }

        com.delTask=function(id)
        {
            com.tasks.splice(fetchIndex(id),1)
        }

        function fetchIndex(id)
        {
            var index
            for(var i=0;i<com.tasks.length;i++)
            {
                if(com.tasks[i].id==id)
                {
                    index=i
                }

            }
            return index
        }

        com.check=function(id)
        {
            com.tasks[fetchIndex(id)].status=!com.tasks[fetchIndex(id)].status
        }

       
       com.fetch=function(id)
       {
        com.items=data
        console.log(id)
        com.final=com.items[id]
        // for(var i=0;i<com.items.length;i++)
        // {
        //     if(com.items[i]==com.items[id])
        //     {
        //         com.final=com.items[i]
        //     }
        // }
        console.log(com.final)
       }


        
       
    }



    function shopCtrl()
    {
        var shop=this
        console.log("shopping")

        shop.tasks=[]

        shop.addTask=function()
        {
            var d=new Date()
            var obj= { id:d.getTime() , name: shop.item , status:false, time:new Date()}
            shop.tasks.push(obj)
            console.log(shop.tasks)
        }

        shop.delTask=function(id)
        {
            shop.tasks.splice(fetchIndex(id),1)
        }

        function fetchIndex(id)
        {
            var index
            for(var i=0;i<shop.tasks.length;i++)
            {
                if(shop.tasks[i].id==id)
                {
                    index=i
                }

            }
            return index
        }

        shop.check=function(id)
        {
            shop.tasks[fetchIndex(id)].status=!shop.tasks[fetchIndex(id)].status
        }
    }


    function studyCtrl()
    {
       

        var study=this
        console.log("study")

        study.tasks=[]

        study.addTask=function()
        {
            var d=new Date()
            var obj= { id:d.getTime() , name: study.item , status:false, time:new Date()}
            study.tasks.push(obj)
            console.log(study.tasks)
        }

        study.delTask=function(id)
        {
            study.tasks.splice(fetchIndex(id),1)
        }

        function fetchIndex(id)
        {
            var index
            for(var i=0;i<study.tasks.length;i++)
            {
                if(study.tasks[i].id==id)
                {
                    index=i
                }

            }
            return index
        }

        study.check=function(id)
        {
            study.tasks[fetchIndex(id)].status=!study.tasks[fetchIndex(id)].status
        }
    }


    function travelCtrl()
    {
        var travel=this
        console.log("travel")

        travel.tasks=[]

        travel.addTask=function()
        {
            var d=new Date()
            var obj= { id:d.getTime() , name:  travel.item , status:false, time:new Date()}
            travel.tasks.push(obj)
            console.log( travel.tasks)
        }

        travel.delTask=function(id)
        {
            travel.tasks.splice(fetchIndex(id),1)
        }

        function fetchIndex(id)
        {
            var index
            for(var i=0;i< travel.tasks.length;i++)
            {
                if( travel.tasks[i].id==id)
                {
                    index=i
                }

            }
            return index
        }

        travel.check=function(id)
        {
            travel.tasks[fetchIndex(id)].status=! travel.tasks[fetchIndex(id)].status
        }
    }

    function data()
    {
        return []
    }