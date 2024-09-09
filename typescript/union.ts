type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;

function networkStatus(state: NetworkState): string {
    // state.code;

    switch(state.state) {
        case "loading":
            return "loading";
        case "failed":
            return "failed";
        case "success":
            return "success";
    }
}