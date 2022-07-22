import './header-info.css';
import { useEffect, useState } from 'react';

const HeaderInfo = () => {
    const [phone, setPhone] = useState('');
    const [workHours, setWorkHours] = useState('');

    useEffect(() => {
        const domain = process.env.REACT_APP_DOMAIN;
        fetch(`${domain}/header-info`)
            .then((response) => response.json())
            .then((data) => {
                setPhone(data.phone);
                setWorkHours(data['work-hours']);
            });
    }, []);
    return (
        <div>
            <section>
                <p>Phone:</p>
                <a href={`tel:+${phone}`}>{phone}</a>
            </section>
            <section>
                <p>Working Hours:</p>
                <p>{workHours}</p>
            </section>
        </div>
    );
};
export default HeaderInfo;
