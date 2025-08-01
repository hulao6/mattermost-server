// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

import useOpenSalesLink from 'components/common/hooks/useOpenSalesLink';

import type {ModalData} from 'types/actions';

import './renew_link.scss';

export interface RenewalLinkProps {
    telemetryInfo?: { success: string; error: string };
    actions: {
        openModal: <P>(modalData: ModalData<P>) => void;
    };
    isDisabled?: boolean;
    customBtnText?: JSX.Element;
    className?: string;
}

const RenewalLink = (props: RenewalLinkProps) => {
    const [openContactSales] = useOpenSalesLink();

    const handleLinkClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        openContactSales();
    };

    const btnText = (
        <FormattedMessage
            id='announcement_bar.warn.renew_license_contact_sales'
            defaultMessage='Contact sales'
        />
    );

    // Default classes for general context
    const defaultClassName = 'btn btn-primary';

    // Use provided className or default
    const buttonClassName = props.className || defaultClassName;

    return (
        <button
            className={buttonClassName}
            disabled={props.isDisabled}
            onClick={(e) => handleLinkClick(e)}
        >
            {btnText}
        </button>
    );
};

export default RenewalLink;
