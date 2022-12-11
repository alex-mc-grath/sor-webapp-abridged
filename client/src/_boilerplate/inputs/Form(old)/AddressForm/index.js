import { useState, useEffect, useRef } from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import IconText from '../IconText'
import IconSelect from '../IconSelect'
import { StyledAddressForm } from './Style'

const countries = {
    "CA": "Canada",
    "US": "United-States"
}

const states = {
    "CA": {
        "AB":"Alberta",
        "BC":"British Columbia",
        "MB":"Manitoba",
        "NB":"New Brunswick",
        "NL":"Newfoundland and Labrador",
        "NS":"Nova Scotia",
        "NT":"Northwest Territories",
        "NU":"Nunavut",
        "ON":"Ontario",
        "PE":"Prince Edward Island",
        "QC":"Quebec",
        "SK":"Saskatchewan",
        "YT":"Yukon"
    },
    "US": {
        "AL":"Alabama",
        "AK":"Alaska",
        "AZ":"Arizona",
        "AR":"Arkansas",
        "CA":"California",
        "CO":"Colorado",
        "CT":"Connecticut",
        "DE":"Delaware",
        "DC":"District of Columbia",
        "FL":"Florida",
        "GA":"Georgia",
        "HI":"Hawaii",
        "ID":"Idaho",
        "IL":"Illinois",
        "IN":"Indiana",
        "IA":"Iowa",
        "KS":"Kansas",
        "KY":"Kentucky",
        "LA":"Louisiana",
        "ME":"Maine",
        "MD":"Maryland",
        "MA":"Massachusetts",
        "MI":"Michigan",
        "MN":"Minnesota",
        "MS":"Mississippi",
        "MO":"Missouri",
        "MT":"Montana",
        "NE":"Nebraska",
        "NV":"Nevada",
        "NH":"New Hampshire",
        "NJ":"New Jersey",
        "NM":"New Mexico",
        "NY":"New York",
        "NC":"North Carolina",
        "ND":"North Dakota",
        "OH":"Ohio",
        "OK":"Oklahoma",
        "OR":"Oregon",
        "PA":"Pennsylvania",
        "RI":"Rhode Island",
        "SC":"South Carolina",
        "SD":"South Dakota",
        "TN":"Tennessee",
        "TX":"Texas",
        "UT":"Utah",
        "VT":"Vermont",
        "VA":"Virginia",
        "WA":"Washington",
        "WV":"West Virginia",
        "WI":"Wisconsin",
        "WY": "Wyoming"
    }
}

export const AddressForm = ({getAction_submit, onSubmit}) => {

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [submitError, setSubmitError] = useState("")
    const myForm = useRef()

    const submitForm = (values) => {

        setSubmitError("")

        let event = new Event('submit', {
            'bubbles'    : true,
            'cancelable' : true 
        });

        myForm.current.dispatchEvent(event)
    }

    const formik = useFormik({
        initialValues: {
            "address":"",
            "apartmentNumber":"",
            "city":"",
            "stateCode":"",
            "countryCode":"",
            "zip":""
        },
        validationSchema: yup.object({
            "address": yup.string().trim().required(),
            "city": yup.string().trim().required(),
            "stateCode": yup.string().trim().required(),
            "countryCode": yup.string().trim().required(),
            "zip": yup.string().trim().required()
        }),
        onSubmit: (values) => {
            if(onSubmit){onSubmit(values,errorCallback)}
        }
    });

    const errorCallback = (message) => {
        setSubmitError(message)
    }

    const countryOnChange = ({target}) => {
        setSelectedCountry(target.value)
    }


    useEffect(() => {
        if(getAction_submit)
        {
            getAction_submit(submitForm)
        }

    }, [getAction_submit])


    return (
        <StyledAddressForm ref={myForm} onSubmit={formik.handleSubmit}>
            {submitError !== "" && <h3>{submitError}</h3>}
            <label>
                <IconText 
                    name="address"
                    formik={formik}
                    layout={{
                        icon: <i className="fa-solid fa-location-dot"></i>,
                        placeholder: "address"
                    }}
                />

                <IconText 
                    name="apartmentNumber"
                    formik={formik}
                    layout={{
                        icon: <i className="fa-solid fa-hashtag"></i>,
                        placeholder: "apartment # (optional)"
                    }}
                />

                <IconText 
                    name="city"
                    formik={formik}
                    layout={{
                        icon: <i className="fa-solid fa-city"></i>,
                        placeholder: "city"
                    }}
                />


                <IconSelect 
                    icon={<i className="fa-solid fa-earth-americas"></i>}
                    formik={formik}
                    name="countryCode"
                    onChange={countryOnChange}
                >
                    <option value="" disabled>-- Country --</option>
                    {Object.entries(countries).map(([code, name]) => (
                        <option key={"country_"+code} value={code}>{name}</option>
                    ))}
                </IconSelect>


                {selectedCountry &&
                    <>
                    <IconSelect 
                        icon={<i className="fa-solid fa-landmark"></i>}
                        formik={formik}
                        name="stateCode"
                    >
                        <option value="" disabled>-- {selectedCountry === "CA"?"province":"state"} --</option>
                        {Object.entries(states[selectedCountry]).map(([code, name]) => (
                            <option key={"country_"+code} value={code}>{name}</option>
                        ))}
                    </IconSelect>

                    <IconText 
                        name="zip"
                        formik={formik}
                        layout={{
                            icon: <i className="fa-solid fa-location-crosshairs"></i>,
                            placeholder: selectedCountry === "CA"?"postal code":"zip code"
                        }}
                    />
                    </>
                }
            </label>
        </StyledAddressForm>
    )
}