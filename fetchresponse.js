try {
    const response = await fetch(responseUri, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const responseData = await response.json();
    document.getElementById('responseOutput').textContent = JSON.stringify(responseData, null, 2);
} catch (error) {
    document.getElementById('responseOutput').textContent = 'Error: ' + error.message;
}


try {
    const request = await fetch(requestUri, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!request.ok) {
        throw new Error('Network response was not ok ' + request.statusText);
    }
    const requestData = await request.json();
    document.getElementById('requestOutput').textContent = JSON.stringify(requestData, null, 2);
} catch (error) {
    document.getElementById('requestOutput').textContent = 'Error: ' + error.message;
}



try {
    const bundler = await fetch(bundlerUri, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!bundler.ok) {
        throw new Error('Network response was not ok ' + bundler.statusText);
    }
    const bundlerData = await bundler.json();
    document.getElementById('bundlerOutput').textContent = JSON.stringify(bundlerData, null, 2);
} catch (error) {
    document.getElementById('bundlerOutput').textContent = 'Error: ' + error.message;
}
