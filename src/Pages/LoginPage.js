import React, { Component } from 'react'

export default class LoginPage extends Component {
    render() {
        return (
            <form className="text-center">
                <h1 className="p-3 mb-2  text-primary " >Üye Girişi</h1>
                <div className="col-12 mb-3 ">
                    <input className="" placeholder="Email"/>
                </div>
                <div className="col-12 mb-3 ">
                    <input className="" placeholder="Parola" type="password"/>
                </div>
                <div className="col-12 mb-3 ">
                    <button className="btn btn-primary">Üye Girişi</button>
                </div>
            </form>
        )
    }
}
