
import React, { Component } from 'react'

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Tbl extends Component {

    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    {title:"NIM"},
                    {title:"Nama"},
                    {title:"Jenis Kelamin"},
                    {title:"Tempat Lahir"},
                    {title:"Tanggal Lahir"},
                    {title:"Alamat"},
                ]
            }
        )
    }

    componentWillMount() {

    }

    render() {
        return <div>
            <table className="display" width="100%" ref={el => this.el = el} >

            </table>
        </div>
    }

}