import React from "react";
import "../css/booking.css"
import Link from "react-router-dom";
const DateItem = () => {
    return (
        <div className="date-item-wrapper">
            <div className="left-side">
                <div className="top">
                    10
                </div>
                <div className="bottom">
                    Sun
                </div>
            </div>
            <div className="right-side">
                30
            </div>
        </div>
    )
}

const LocationItem = () => {
    return (
        <div className="location">
            Ho Chi Minh
        </div>
    )
}

const CategoryViewItem = () => {
    return (
        <div className="category">
            2D Phu De Viet
        </div>
    )
}

const CinemaItem = () => {

    const CategoryView = () => {

        const TimeItem = () => {
            return (
                <div className="time-detail">
                    08:40 AM
                </div>
            )
        }

        return (
            <div className="category-view-wrapper">
                <div className="category-view">Rap 2D</div>
                <div className="time-wrapper list-display">
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                    <TimeItem />
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="line" />
            <div className="cinema-detail">
                <div className="name">CGV Hung Vuong Plaza</div>
                <CategoryView />
                <CategoryView />
                <CategoryView />
            </div>
        </div>
    )
}

const Booking = () => {
    return (
        <div className="booking-wrapper">
            <div className="date-wrapper list-display">
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
            </div>
            <div className="line" />
            <div className="location-wrapper list-display">
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
            </div>
            <div className="line" />
            <div className="category-view-wrapper list-display">
                <CategoryViewItem />
                <CategoryViewItem />
                <CategoryViewItem />
                <CategoryViewItem />
                <CategoryViewItem />
                <CategoryViewItem />
                <CategoryViewItem />
                <CategoryViewItem />
            </div>
            <div className="cinema-wrapper">
                <CinemaItem />
                <CinemaItem />
                <CinemaItem />
                <CinemaItem />
            </div>
        </div>
    )
}
export default Booking;