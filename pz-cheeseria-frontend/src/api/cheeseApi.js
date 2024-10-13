const API_BASE_URL = "http://localhost:3001";

// Get all active cheeses
export const getAllCheeses = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/cheeses`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Failed to fetch cheeses:", error);
        throw error;
    }
};

// Get a specific cheese by ID
export const getCheeseById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cheeses/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(`Failed to fetch cheese with ID ${id}:`, error);
        throw error;
    }
};

// Create a new cheese 
// This would be used by the admin but I have not implemented the admin page.
export const createCheese = async (cheeseData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cheeses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cheeseData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error("Failed to create cheese:", error);
        throw error;
    }
};

// Update an existing cheese by ID
// This would be used by the admin but I have not implemented the admin page.
export const updateCheese = async (id, cheeseData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cheeses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cheeseData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error(`Failed to update cheese with ID ${id}:`, error);
        throw error;
    }
};

// Soft delete a cheese by ID
// Delete is 0 for soft delete and 1 for not deleted
// This would be used by the admin but I have not implemented the admin page.
export const deleteCheese = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cheeses/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error(`Failed to delete cheese with ID ${id}:`, error);
        throw error;
    }
};
