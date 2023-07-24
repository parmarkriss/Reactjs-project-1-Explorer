const Viewdata = ({ view }) => {
    return (
        <center>
            <h2>Function</h2>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Grid</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Courses</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.map((val) => (
                            <tr key={val.grid}>
                                <td>{val.grid}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>{val.course.join(', ')}</td>
                                <td>{val.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </center>
    );
};

export default Viewdata;
