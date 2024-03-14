import React from 'react'

const Chechkbox = () => {
    <div className="form-field">
    <div>
        {renderCheckbox('Consistent')}
        {renderCheckbox('Average')}
        {renderCheckbox('Casual')}
        {renderCheckbox('Well-groomed')}
    </div>

    <div>
        {renderCheckbox('Younger')}
        {renderCheckbox('Short')}
        {renderCheckbox('Obese')}
        {renderCheckbox('Neat')}
        {renderCheckbox('Adequate')}
    </div>

    <div>
        {renderCheckbox('Older')}
        {renderCheckbox('Tall')}
        {renderCheckbox('Overweight')}
        {renderCheckbox('Tattered')}
        {renderCheckbox('Unkempt')}
    </div>

    <div>
        {renderCheckbox('Thin')}
        {renderCheckbox('Dirty')}
        {renderCheckbox('Disheveled')}
    </div>

    <div>
        {renderCheckbox('Emaciated')}
    </div>
</div>;

function renderCheckbox(label) {
    return (
        <>
            <input type="checkbox" id={label.toLowerCase()} name={label.toLowerCase()} style={{ width: '2%', padding: '0', color: '#00000099' }} />
            <span style={{ color: '#00000099', fontWeight: '400', fontSize: '16px' }}>{label}</span>
        </>
    );
}

}

export default Chechkbox


