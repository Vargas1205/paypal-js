import React from "react";

import { PayPalCardFieldsFormOptions } from "../../types";
import { PayPalCardField } from "./PayPalCardField";
import { FlexContainer } from "../ui/FlexContainer";
import { FullWidthContainer } from "../ui/FullWidthContainer";

/**
This `<PayPalCardFieldsForm />` component renders the 4 individual fields for [Card Fields](https://developer.paypal.com/docs/business/checkout/advanced-card-payments/integrate#3-add-javascript-sdk-and-card-form) integrations.
This setup relies on the `<PayPalCardFieldsProvider />` parent component, which manages the state related to loading the JS SDK script and performs certain validations before rendering the fields.



Note: If you want to have more granular control over the structure of how the fields are rendered, you can alternatively use our Individual Fields.
*/
export const PayPalCardFieldsForm: React.FC<PayPalCardFieldsFormOptions> = ({
    className,
    ...options
}) => {
    return (
        <div className={className}>
            <PayPalCardField fieldName="NameField" {...options} />
            <PayPalCardField fieldName="NumberField" {...options} />
            <FlexContainer>
                <FullWidthContainer>
                    <PayPalCardField fieldName="ExpiryField" {...options} />
                </FullWidthContainer>
                <FullWidthContainer>
                    <PayPalCardField fieldName="CVVField" {...options} />
                </FullWidthContainer>
            </FlexContainer>
        </div>
    );
};
