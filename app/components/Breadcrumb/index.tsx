import React, { FC } from 'react'

interface BreadcrumbItem {
    label: string
    path?: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="breadcrumb-list" style={{ listStyle: 'none', padding: 0, display: 'flex', alignItems: 'center' }}>
                {items.map((item, index) => (
                    <li key={index} style={{ marginRight: 0 }}>
                        {item.path ? (
                            <a href={item.path} style={{ color: '#888F87', textDecoration: 'none' }}>
                                {item.label}
                            </a>
                        ) : (
                            <span style={{ color: '#0C0C0C' }}>{item.label}</span>
                        )}
                        {index < items.length - 1 && <span style={{ margin: '0 8px', color: '#888F87' }}>&gt;</span>}
                    </li>
                ))}
            </ol>
        </nav>

    )
}

export default Breadcrumb