import React from 'react';
import { RiDeleteBinLine, RiEdit2Line, RiCalendarEventFill } from "react-icons/ri";

const TableRow = ({ datum }) => {
    const { task, checked, time, start, end } = datum;
    return (
        <tr className=' bg-red-200'>
            <td className='bg-green-300'>
                <input type="checkbox" className="checkbox checkbox-md inline-block align-middle" style={{border:"2px solid #000", borderRadius: "50%"}} />
                <p className='text-[18px] ml-4 inline-block align-middle'>{task}</p>
                <p className='ml-[40px]'><RiCalendarEventFill className={end ? 'inline-block mr-2' : 'hidden'} /><small className=''>{end}</small></p>
            </td>
            <td className=' bg-cyan-300'>
                <button className="btn btn-ghost btn-md" style={{borderRadius:"50%", padding: "0px 11px"}}>
                    <RiEdit2Line className='text-2xl' />
                </button>
                <button className="btn btn-ghost"  style={{borderRadius:"50%", padding: "0px 11px"}}>
                    <RiDeleteBinLine className='text-2xl' />
                </button>
            </td>

        </tr>
    );
};

export default TableRow;