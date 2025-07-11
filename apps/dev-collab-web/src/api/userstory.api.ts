// apps/dev-collab-web/src/api/userstory.api.ts
import { useAxios } from '@/vendors/axios'

export const UserStoryApi = () => {
    const axios = useAxios()

    return {
        // Fetch all user stories
        async getUserStories() {
            const { data } = await axios.get('/userstory')
            return data
        },

        // Create a new user story
        async createUserStory(userStoryData: Record<string, any>) {
            const { data } = await axios.post('/userstory', userStoryData)
            return data
        },

        // Update an existing user story
        async updateUserStory(userStoryId: number, userStoryData: Record<string, any>) {
            const { data } = await axios.put(`/userstory/${userStoryId}`, userStoryData)
            return data
        },

        // Delete a user story
        async deleteUserStory(userStoryId: number) {
            await axios.delete(`/userstory/${userStoryId}`)
        },

        // Upvote a user story
        async upvoteUserStory(userStoryId: number) {
            const { data } = await axios.post(`/userstory/${userStoryId}/upvote`)
            return data
        },

        // Downvote a user story
        async downvoteUserStory(userStoryId: number) {
            const { data } = await axios.post(`/userstory/${userStoryId}/downvote`)
            return data
        }
    }
}
