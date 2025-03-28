import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CopyBoxComponent = ({ code, className }) => {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className={` ${className} bg-slate-500/10 flex justify-between items-start p-2 md:p-4 rounded-lg ring-1 ring-slate-400`}>
            <pre className="w-full overflow-x-auto  pb-2 md:p-1">
                <code>{code}</code>
            </pre>
            <button onClick={handleClick} className="ml-3">
                {copied ? (
                    <Check size={20} className="cursor-pointer text-green-600" />
                ) : (
                    <Copy size={20} className="cursor-pointer hover:text-cyan-600 transition" />
                )}
            </button>
        </div>
    );
};

export default CopyBoxComponent;
