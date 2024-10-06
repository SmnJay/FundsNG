import React, { FC } from 'react'

type Props = {
    description: string
}
const CampaignRecentActivity: FC<Props> = ({ description }) => {
    return (
        <div>{description}</div>
    )
}

export default CampaignRecentActivity