import React from 'react';

type SectionTitleProps = {
    title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
            {title}
        </h2>
    );
};

export default SectionTitle;
