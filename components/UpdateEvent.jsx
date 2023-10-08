"use client";
import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { CommButton, FormInput1, Title } from '@/components'
import { committeeList } from '@/constants'
import DataContext from '@/context/data/DataContext';
import checkEmptyInput from '@/utils/checkEmptyInput';
import { uploadImage } from '@/utils/ulpoadImage';

function UpdateEvent({ updateEventData, setAllEventData, setIsUpdate ,committeeID }) {

    const dd = useContext(DataContext)

    const [isUpdatting, setIsUpdatting] = useState(false)
    const [isImageChange, setIsImageChange] = useState(false)

    const [dataEvent, setDataEvent] = useState({
        name: "",
        type: "",
        organizer: "",
        sdate: "",
        edate: "",
        venue: "",
        poster: null,
        description: "",
        joinLink: ""

    }

    );

    useEffect(() => {
        dataEvent.name === "" && dataEvent.poster === null && setDataEvent(updateEventData)
        console.log(dataEvent)
    }

        , [])

    const handleOnChangeImage = (name, data) => {
        setDataEvent(pre => ({ ...pre, [name]: data }))
        setIsImageChange(true)


    }


    const handdleEventChange = (e) => {
        setDataEvent({ ...dataEvent, [e.target.name]: e.target.value })
    }
    // formdata
    const eventForm = [
        {
            name: "name",
            placeholder: "Enter your Committee Name",
            onChangeFunc: handdleEventChange,

            value: dataEvent.name,
            type: "text",


        },
        {
            name: "type",
            placeholder: "Enter the type of event",
            onChangeFunc: handdleEventChange,

            value: dataEvent.type,
            type: "text",


        },
        // {
        //     name:"organizer" ,
        //     placeholder :"Organizer Of Event" ,
        //     onChangeFunc :handdleEventChange,

        //     value :dataEvent.organizer ,
        //     type:"dropdown",
        //     dropDown :committeeList

        // },
        {
            name: "sdate",
            placeholder: "Enter Start Date",
            onChangeFunc: handdleEventChange,

            value: dataEvent.sdate,
            type: "date",

        },
        {
            name: "edate",
            placeholder: "Enter End Date",
            onChangeFunc: handdleEventChange,

            value: dataEvent.edate,
            type: "date",

        }
        ,
        {
            name: "venue",
            placeholder: "Enter Venue",
            onChangeFunc: handdleEventChange,

            value: dataEvent.venue,
            type: "text",

        }
        ,
        {
            name: "poster",
            placeholder: "Enter Poster of event",
            onChangeFunc: handleOnChangeImage,

            value: dataEvent.poster,
            type: "file",

        }
        ,
        {
            name: "description",
            placeholder: "Enter Description of Event",
            onChangeFunc: handdleEventChange,

            value: dataEvent.description,
            type: "text",

        },
        {
            name: "joinLink",
            placeholder: "Enter join Link of Event",
            onChangeFunc: handdleEventChange,

            value: dataEvent.joinLink,
            type: "text",

        }
        ,


    ];

    const handleUpdate = async (e) => {

        console.log(dataEvent)

        e.preventDefault();
        const inp = checkEmptyInput(dataEvent)
        if (inp.length > 0) {
            return dd.setAlertFunc("error", ("Please Fill " + inp[0] + " field"))

        }


        setIsUpdatting(true)
        // if image change then appield
        if (isImageChange) {
            console.log(dataEvent.poster)
            const imgUrl = await uploadImage(dataEvent.poster)

            setDataEvent(pre => ({ ...pre, poster: imgUrl.result.secure_url }))
            console.log(imgUrl?.result.secure_url)
            if (!imgUrl.result) {
                setIsUpdatting(false)
                return dd.setAlertFunc('error', "Server Error")
            }
            const res = await fetch(`/api/events/`, {
                method: "POST",
                body: JSON.stringify({ ...dataEvent, poster: imgUrl.result.secure_url })
            })

            const data = await res.json();
            console.log(data)
            let newData = data.data
            if(committeeID){
                newData = newData.filter(item=> item.organizer === committeeID)
            }
            data.ok ===true && setAllEventData(newData)
          
            // console.log(committeeData)
            // data.ok ===true && setAllEventData(pre=>({...committeeData ,photo:imgUrl.result.secure_url}))
            setIsUpdatting(false)

            setIsUpdate(false)
            return dd.setAlertFunc(data.type, data.msg)

        }

        const res = await fetch(`/api/events/`, {
            method: "POST",
            body: JSON.stringify({ ...dataEvent })
        })

        const data = await res.json();
        console.log(data)
        let newData = data.data
if(committeeID){
    newData = newData.filter(item=> item.organizer === committeeID)
}
        // for the inser the data in pericular index 



        // console.log(committeeData)
        data.ok ===true && setAllEventData(newData)
        setIsUpdatting(false)

        setIsUpdate(false)
        return dd.setAlertFunc(data.type, data.msg)
    }





    return (
        <div>
            <Title name={"Update Event Card"} />
            <div className="flex justify-center items-center  flex-col  ">
                {/* <FormInput name="name" value ="" placeholder="Enter your name"  type ="text" classes ="w-[400px] m-2 " OnchangeFun={(e,name)=>{}} /> */}
                {
                    eventForm.map((item, index) => (
                        <FormInput1  {...item} />


                    ))

                }
                <CommButton title={"Update"} CssClasses={""} isSubmitting={isUpdatting} handdleSubmite={handleUpdate} />


            </div>

        </div>
    )
}

export default UpdateEvent
