export const formatearDiner = cantidad => {
    return cantidad.toLocaleString('en-us', {
        style: "currency",
        currency: "USD",
    });
};
