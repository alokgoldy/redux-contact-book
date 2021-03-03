import React,{useState} from 'react'
import Avatar from 'react-avatar';
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { deleteContact } from "../actions/contactAction";



function Contact({item,selectAll}) {
    
    const dispatch = useDispatch();

    return (
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <input
                            checked={selectAll}
                            type="checkbox"
                            className="custom-control-input"
                        />
                        <label className="custom-control-label"></label>
                    </div>
                </td>
                <td>
                    <Avatar className="mr-2" name={item.name} size="45" round={true}/>
                    {item.name}
                </td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td className="actions">
                    <Link to={`/contacts/edit/${item.id}`}>
                        <span className="material-icons mr-2">edit</span>
                    </Link>
                        <span className="material-icons  text-danger" style={{cursor: "pointer"}} onClick={() => dispatch(deleteContact(item.id))}>
                            remove_circle
                        </span>     
                </td>  
            </tr>
    )
}

export default Contact
