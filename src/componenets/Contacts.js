import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import {useSelector} from 'react-redux';
import Contact from './Contact'
import { useDispatch} from "react-redux";

import {  selectAllContact,clearAllContact} from "../actions/contactAction";


function Contacts() {

    const dispatch = useDispatch();

    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector(state => state.contacts.contacts);

    useEffect(() => {
        
        if(selectAll){
            dispatch(selectAllContact(contacts.map((contact) => contact.id)))
        }else{
            dispatch(clearAllContact())
        }
    }, [selectAll])
    return (
        <div>
            <Table bordered hover variant="shadow">
                <thead className="bg-danger text-white" >
                    <tr >
                        <th>
                        <div className="custom-control custom-checkbox" style={{cursor: "pointer"}}>
                        <input 
                            id="selectAll" 
                            type="checkbox" 
                            className="custom-control-input"
                            value={selectAll}
                            onClick={() => setSelectAll(!selectAll)}
                            
                        />
                        <label htmlFor="selectAll" className="custom-control-label"></label>
                    </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((item) => (
                        <Contact item={item} key={item.id} selectAll={selectAll}/>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Contacts
