import { useEffect, useState } from 'react';
import './header-info.css';

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
        <div className="header-info">
            <section className="header-info-section">
                <p className="title">Phone:</p>
                <a className="description" href={`tel:+${phone}`}>
                    {phone}
                </a>
            </section>
            <section className="header-info-section">
                <p className="title">Working Hours:</p>
                <p className="description">{workHours}</p>
            </section>
        </div>
    );
};
export default HeaderInfo;
