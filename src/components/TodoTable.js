import React from 'react';
import { useQuery } from 'react-query';
import TableRow from './TableRow';

const TodoTable = () => {
    const {data, isLoading, refetch}=useQuery('task', ()=>fetch('http://localhost:5000/api/v1/tasks')
    .then(res=>res.json())
    );

    if(isLoading)
        return;
    
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            data.data.map(datum=><TableRow
                            key={datum._id}
                            datum={datum}
                            />)
                        }
                       {/* <TableRow
                    //    key={data.data._id}
                       data={data}
                       />
                       <TableRow/>
                       <TableRow/> */}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default TodoTable;