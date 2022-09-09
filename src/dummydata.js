
export const mainpage = [
    {
    welcome_message: "أهلاً بكم Technical Support",
    mobile: "تحديث تطبيقات الموبايل",
    location:"تحديث الموقع",
    }
]
export const constants ={
    link:"menu-icon fas",
    toolsLink : "ace-icon fa",
    horizantalnavbarLink : "fa",
}
export const menu = [
    {
        id:1,
        title:"Slider",
        link:"/sliderpage",
        icon:"fa-images"
    },
    {   id:2,
        title:"Articles",
        link:"/articlespage",
        icon: "fa-newspaper"
    },
    {
        id:3,
        title:"Videos",
        link:"/videospage",
        icon: "fa-video"
    },
    {   id:4,
        title:"Author",
        link:"/authorspage",
        icon: 'fa-user-edit'
    }, 
   
    
]
export const tools=[
    {
        id:1,
        icon:"fa-sync-alt"
    },
    {
        id:2,
        icon:"fa-tools"
    },
    {  
        id:3,
        icon:"fa-code"
    }
]
export const horizantalnavbar=[
    {
       menu : <i className="fa fa-th"></i>,
       user_circle: "fa fa-user-circle",
       drop_down_alt: "MangoX",
       userExperience : "../images/dxm.png",
       grid:"fa fa-th",
    }
]
export const sliderNavigation=[
    {
        slider_title:"Slider",
        save:"حفظ ",
        save_icon: <i className="ace-icon fa fa-save "></i>,
        edit: "تعديل ",
        edit_icon: <i className="ace-icon fa fa-edit"></i>,
        delete_nasher: "إلغاء نشر ",
        delete_nasher_icon:<i className="ace-icon fa fa-times"></i>,
    },
]
export const slider=[
 
    {
        id:1,
        title:"3 Ways to make your business presentation more relatable",
        description:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores.",
        added_date:" 2022-07-01T07:02:36.37 - -- ",
        edited_date:" 2022-08-29T09:30:42.71 - --  ",
        date:" 2022-07-01T07:09:19.51",
        image: ".components/images/4560ec65-9dcf-4914-ae7d-c082e6b7c44d.jpg",
        button:"منشور ",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        eye_icon: <i className="ace-icon fa fa-eye bigger-125"></i>,
        times_icon:<i className="ace-icon fa fa-times bigger-125"></i>,
    },
    {
        id:2,
        title:"NASA seeks to build a quieter supersonic plane for passenger flight",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        added_date:" 2022-07-06T11:58:18.453 - --  ",
        edited_date:" 2022-07-06T12:01:42.46 - --  ",
        date:" 2022-07-06T12:01:41.89",
        image:"./components/images/44b612ef-a74d-4809-961b-91e41c8e1a2a.jpg",
        button:"منشور ",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        eye_icon: <i className="ace-icon fa fa-eye bigger-125"></i>,
        times_icon:<i className="ace-icon fa fa-times bigger-125"></i>,
    },
    {
        id:3,
        title:"Mobile Google CEO Promises 19 Daydream-compatible phones",
        description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
        added_date:" 2022-07-01T07:07:27.13 - --  ",
        edited_date:"2022-07-20T10:19:09.56 - --  ",
        date:" 2022-07-01T07:08:00",
        image:"./components/images/1c77ef95-5271-4cfe-aa4a-f4c38ec7aafb.jpg",
        button:"منشور ",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        eye_icon: <i className="ace-icon fa fa-eye bigger-125"></i>,
        times_icon:<i className="ace-icon fa fa-times bigger-125"></i>,
    }
]
export const authorHeader=[
    {
        author_title:"Autor",
        author_icon:"fa fa-plus",
        table_row_title:"عنوان",
        table_row_situation:"الحالة",  
    },
]
export const author=[
    {
        id:1,
        title:"Author",
        description:"آخر تعديل بواسطة mangopulseTester في 21 July 13:37",
        button:"New",
        button_icon:"ace-icon fa fa-bolt bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
        icon_1 :"fa fa-external-link-alt",
        image:"../images/placeholder.gif"

    },
    {
        id:2,
        title:"Clark Jones",
        description:"خر تعديل بواسطة techsupport في 1 July 06:40",
        button:"Published",
        button_icon:"ace-icon fa fa-check bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
        share_button:"نشر",
        share_button_icon:"ace-icon fa fa-edit",
        icon_1:"purple fa fa-file-image",
        icon_2:"fa fa-anchor",
        image:"../images/7922cb26-d061-43e8-ac90-8258ab12d97b.jpg"
    },
    {
        id:3,
        title:"John Smith",
        description:"آخر تعديل بواسطة techsupport في 1 July 06:40",
        button:"Published",
        button_icon:"ace-icon fa fa-check bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
        share_button:"نشر",
        share_button_icon:"ace-icon fa fa-edit",
        icon_1:"purple fa fa-file-image",
        icon_2:"fa fa-anchor",
        image:"../images/4bd0ecc2-0c46-4648-b0f0-1f13249a33c9.jpg"
    },
   
]
export const mininavbar=[
    {
        alnasher:"الناشر",
        alnasher_icon: "ace-icon fa fa-sliders-h",
        takseem: " تقسيم",
        takseem_icon: "ace-icon fa fa-sitemap",
        list_icon:"icon-only ace-icon fa fa-list",
        grid_icon: "icon-only ace-icon fa fa-th-large"
    }
]
export const videoHeader=[
    {
        videos_title:"Video",
        video_icon:"fa fa-plus",
        table_row_title:"عنوان",
        table_row_category:"Video Category",
        table_row_author:"Author",
        table_row_situation:"الحالة",
    },
]
export const videosIcons=[
    {
        id:1,
        icon: "fa fa-external-link-alt"
    },
    {
        id:2,
        icon: "yellow fa fa-file-video"
    },
    {
        id:3,
        icon:"purple fa fa-file-image"
    },
    {
        id:4,
        icon:"purple fa fa-file-image"
    }
]
export const videos=[
   
    {
        id:1,
        title:"testing",
        date:"23 Aug 11:46",
        last_update:"آخر تعديل بواسطة techsupport في 23 Aug 11:55",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:"ace-icon fa fa-check bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
        share_button:"نشر",
        share_button_icon:"ace-icon fa fa-edit",
    },
    {
        id:2,
        title:"Federer makes history with eighth Wimbledon, 19th major",
        date:"23 Aug 11:42",
        last_update:"آخر تعديل بواسطة techsupport في 23 Aug 11:42",
        category:"Sports",
        author:"Clark Jones",
        button:"Published",
        button_icon:"ace-icon fa fa-check bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
        share_button:"نشر",
        share_button_icon:"ace-icon fa fa-edit",
    },
    {
        id:3,
        title:"Mod turns ‘Counter-Strike’ into a ‘Tekken’ clone with fighting chickens",
        date:"23 Aug 11:42",
        last_update:"آخر تعديل بواسطة techsupport في 23 Aug 11:42",
        category:"Sports",
        author:"Clark Jones",
        button:"Published",
        button_icon:"ace-icon fa fa-check bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
        share_button:"نشر",
        share_button_icon:"ace-icon fa fa-edit",
    },
    {
        id:4,
        title:"new",
        date:"23 Aug 11:23",
        last_update:"آخر تعديل بواسطة techsupport في 23 Aug 11:43",
        category:"Sports",
        author:"Clark Jones",
        button:"Published",
        button_icon:"ace-icon fa fa-check bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
        share_button:"نشر",
        share_button_icon:"ace-icon fa fa-share-al",
    },
    {
        id:5,
        title:"تجربة",
        date:"29 July 12:30",
        last_update:"آخر تعديل بواسطة techsupport في 23 Aug 11:43",
        category:"Sports",
        button:"Unpublished",
        button_icon:"ace-icon fa fa-times bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
    },
    {
        id:6,
        title:"تجربة",
        date:"29 July 12:22",
        last_update:"آخر تعديل بواسطة techsupport في 23 Aug 11:43",
        category:"Politics",
        author:"John Smith",
        button:"Unpublished",
        button_icon:"ace-icon fa fa-times bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
    },
    {
        id:7,
        title:"test video",
        date:"21 July 11:15",
        last_update:"آخر تعديل بواسطة techsupport في 23 Aug 11:43",
        category:"Entertainment",
        button:"Unpublished",
        button_icon:"ace-icon fa fa-times bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
       
    },
    {
        id:8,
        title:"Federer makes history with eighth Wimbledon, 19th major title",
        date:"1 July 08:58",
        last_update:"آخر تعديل بواسطة techsupport في 23 Aug 11:43",
        category:"Sports",
        author:"Clark Jones",
        button:"Unpublished",
        button_icon:"ace-icon fa fa-times bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
    },
    {
        id:9,
        title:"Mod turns ‘Counter-Strike’ into a ‘Tekken’ clone with fighting chickens",
        date:"23 Aug 11:42",
        last_update:"آخر تعديل بواسطة techsupport في 23 Aug 11:42",
        category:"Business",
        author:"John Smith",
        button:"Unpublished",
        button_icon:"ace-icon fa fa-times bigger-120",
        edit_button:"تعديل",
        edit_button_icon:"ace-icon fa fa-edit",
    },

]
export const articleHeader=[
    {
        article_title:"Article",
        article_plus_icon:"fa fa-plus",
        table_row_title:"عنوان",
        table_row_category:"Category",
        table_row_author:"Author",
        table_row_situation:"الحالة",
    }

]
export const article=[
    {
        id:1,
        title:"test Search",
        date:"2 Sep 13:18",
        last_update:"آخر تعديل بواسطة techsupport في Today 08:51",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,

    },
    {
        id:2,
        title:"1news1",
        date:"29 Aug 12:45",
        last_update:"آخر تعديل بواسطة techsupport في 29 Aug 12:45",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,

    },
    {
        id:3,
        title:"test",
        last_update:"خر تعديل بواسطة techsupport في 29 Aug 08:20",
        button:"New",
        button_icon:<i className="ace-icon fa fa-bolt"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:4,
        title:"article 2",
        date:"8 Aug 12:11",
        last_update:"آخر تعديل بواسطة techsupport في 29 Aug 09:59",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:5,
        title:"test article",
        date:"8 Aug 11:54",
        last_update:"آخر تعديل بواسطة techsupport في 8 Aug 12:14",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:6,
        title:"Startup adds beds and Wi-Fi to buses to turn them into ‘moving hotels’",
        date:"6 July 12:01",
        last_update:"آخر تعديل بواسطة techsupport في 8 Aug 11:43",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:7,
        title:"5 Crowdfunded products that actually delivered on the hyp",
        date:"6 July 12:01",
        last_update:"آخر تعديل بواسطة techsupport في 28 July 07:23",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:8,
        title:"Microsoft Paint is finally dead, and the world Is a better place",
        date:"6 July 12:01",
        last_update:"آخر تعديل بواسطة techsupport في 10 Aug 17:04",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:9,
        title:"NASA seeks to build a quieter supersonic plane for passenger flight",
        date:"6 July 12:01",
        last_update:"آخر تعديل بواسطة techsupport في 6 July 12:01",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:10,
        title:"Hulu hires Google marketing veteran Kelly Campbell as CMO",
        date:"6 July 12:01",
        last_update:"آخر تعديل بواسطة techsupport في 6 July 12:01",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:11,
        title:"Ford’s 2018 Mustang GT can do 0-to-60 mph in under 4 seconds",
        date:"6 July 12:01",
        last_update:"آخر تعديل بواسطة techsupport في 6 July 12:06",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:12,
        title:"Lawmaker spends a day working as baggage handler, barista",
        date:"6 July 11:49",
        last_update:"آخر تعديل بواسطة techsupport في 8 July 08:22",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:13,
        title:"Some California incumbents lagging in fundraising: report ",
        date:"6 July 11:49",
        last_update:"آخر تعديل بواسطة techsupport في 8 July 08:22",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:14,
        title:"Report: $15 minimum wage bill would benefit 20.7 million workers",
        date:"6 July 11:49",
        last_update:"آخر تعديل بواسطة techsupport في 8 July 08:22",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:15,
        title:"House panel to consider bill to revamp DHS cyber team",
        date:"6 July 11:49",
        last_update:"آخر تعديل بواسطة techsupport في 8 July 08:22",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:16,
        title:"Poll: Virginia governor’s race in dead heat",
        date:"6 July 11:49",
        last_update:"آخر تعديل بواسطة techsupport في 8 July 08:22",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:17,
        title:"Ruth Bader Ginsburg optimistic ‘over the long haul’ for US",
        date:"6 July 11:49",
        last_update:"آخر تعديل بواسطة techsupport في 8 July 08:22",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:18,
        title:"Congress rolls out ‘Better Deal,’ new economic agenda",
        date:"6 July 11:49",
        last_update:"آخر تعديل بواسطة techsupport في 8 July 08:23",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:19,
        title:"Illinois’ financial crisis could bring the state to a halt",
        date:"6 July 11:49",
        last_update:"آخر تعديل بواسطة techsupport في 8 July 08:23",
        category:"Tech",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    },
    {
        id:20,
        title:"Mayors agree, Congress should invest in affordable housing",
        date:"6 July 11:49",
        last_update:"آخر تعديل بواسطة techsupport في 8 July 08:23",
        category:"6 July 11:49",
        author:"Clark Jones",
        button:"Published",
        button_icon:<i className="ace-icon fa fa-check bigger-120"></i>,
        edit_button:"تعديل",
        edit_button_icon:<i className="ace-icon fa fa-edit"></i>,
        share_button:"نشر",
        share_button_icon:<i className="ace-icon fa fa-edit"></i>,
        icon_1: <i className="purple fa fa-file-image"></i>,
        icon_2: <i className="purple fa fa-file-image"></i>,
        icon_3: <i className="  fa fa-external-link-alt"></i>,
    }
]