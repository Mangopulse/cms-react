import styled from "styled-components";
let id = 0;

export const createId = () => id++;

const defs = { chosen: false, filtered: false, selected: false };

export const threes = () => [
  { id: id++,
    title:"3 Ways to make your business presentation more relatable",
    description:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores.",
    added_date:" 2022-07-01T07:02:36.37 - -- ",
    edited_date:" 2022-08-29T09:30:42.71 - --  ",
    date:" 2022-07-01T07:09:19.51",
    image: ".components/images/4560ec65-9dcf-4914-ae7d-c082e6b7c44d.jpg",
    button:"منشور ",
    image:"../images/basketball_image.jpg",
    button_icon:"ace-icon fa fa-check bigger-120",
    eye_icon: "ace-icon fa fa-eye bigger-125",
    times_icon:"ace-icon fa fa-times bigger-125",
    ...defs },
    {
        id:id++,
        title:"NASA seeks to build a quieter supersonic plane for passenger flight",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        added_date:" 2022-07-06T11:58:18.453 - --  ",
        edited_date:" 2022-07-06T12:01:42.46 - --  ",
        date:" 2022-07-06T12:01:41.89",
        image:"./components/images/44b612ef-a74d-4809-961b-91e41c8e1a2a.jpg",
        button:"منشور ",
        image:"../images/download2.jpg",
        button_icon:"ace-icon fa fa-check bigger-120",
        eye_icon: "ace-icon fa fa-eye bigger-125",
        times_icon:"ace-icon fa fa-times bigger-125",
        ...defs },
    {
        id:id++,
        title:"Mobile Google CEO Promises 19 Daydream-compatible phones",
        description:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
        added_date:" 2022-07-01T07:07:27.13 - --  ",
        edited_date:"2022-07-20T10:19:09.56 - --  ",
        date:" 2022-07-01T07:08:00",
        button:"منشور ",
        image:"../images/download.jpg",
        button_icon:"ace-icon fa fa-check bigger-120",
        eye_icon: "ace-icon fa fa-eye bigger-125",
        times_icon:"ace-icon fa fa-times bigger-125",
        ...defs}
  
];

export const Item = styled.div`
  display: flex;
  padding: 0.3rem;
  border-radius: 0.2rem;
  background-color: #fff6;
  margin-bottom: 0.3rem;

  &.sortable-ghost {
    background-color: #fff;
  }
`;
