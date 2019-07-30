import Axios from "axios";
import store from "../store";
import NotificationController from "./NotificationController";
import { constants } from "../Constants";

/**
 * Controller for handling leaderboards.
 */
export default class LeaderboardController {
  apiUrl = constants.apiUrl;

  /**
   * Get all of a user's leaderboards.
   */
  static async getLeaderboards() {
    let response;

    try {
      response = await Axios.get(
        `${constants.apiUrl}/leaderboard`,
        LeaderboardController.getHeaders()
      );
    } catch (e) {
      NotificationController.setError(e.message);
      return;
    }

    store.commit("setLeaderboards", response.data);
  }

  /**
   * Get the leaderboard data from an id.
   * @param {string} boardId
   */
  static async getLeaderboardData(boardId) {
    // eslint-disable-next-line no-console
    let response;

    try {
      response = await Axios.get(
        `${constants.apiUrl}/leaderboard/${boardId}`,
        LeaderboardController.getHeaders()
      );
    } catch (e) {
      NotificationController.setError(e.message);
      throw new Error("Could not fetch leaderboard");
    }

    store.commit("setLeaderboardData", response.data);
  }

  /**
   * Store a leaderboard remotely.
   * @param {*} data
   */
  static async createLeaderboard(data) {
    let response;

    try {
      response = await Axios.post(
        `${this.apiUrl}`,
        data,
        LeaderboardController.getHeaders()
      );
    } catch (e) {
      NotificationController.setError(e.message);
      return;
    }

    store.commit("addLeaderboard", response.data);
  }

  /**
   * Delete a leaderboard.
   * @param {string} boardId
   */
  static async deleteLeaderboard(boardId) {
    try {
      await Axios.delete(
        `${this.apiUrl}/leaderboard/${boardId}`,
        LeaderboardController.getHeaders()
      );
    } catch (e) {
      NotificationController.setError(e.message);
      return;
    }

    store.commit("removeLeaderboard", boardId);
  }

  /**
   * Add a member to a board.
   * @param {string} boardId
   * @param {string} email
   */
  static async addMemberToBoard(boardId, email) {
    const payload = {
      boardId,
      email
    };

    try {
      await Axios.put(
        `${this.apiUrl}/leaderboad/members/add`,
        payload,
        LeaderboardController.getHeaders()
      );
    } catch (e) {
      NotificationController.setError(e.message);
    }

    await this.getLeaderboardData(boardId);
  }

  /**
   * Remove a member from the leaderboard.
   * @param {string} boardId
   * @param {string} email
   */
  static async removeMemberFromBoard(boardId, email) {
    const payload = {
      boardId,
      email
    };

    try {
      await Axios.put(
        `${this.apiUrl}/leaderboad/members/remove`,
        payload,
        LeaderboardController.getHeaders()
      );
    } catch (e) {
      NotificationController.setError(e.message);
    }

    store.commit("removeMemberFromBoard", { boardId, email });
    await this.getLeaderboardData(boardId);
  }

  static async addAdminToBoard(boardId, email) {
    const payload = {
      boardId,
      email
    };

    try {
      await Axios.put(
        `${this.apiUrl}/leaderboad/admins/add`,
        payload,
        LeaderboardController.getHeaders()
      );
    } catch (e) {
      NotificationController.setError(e.message);
    }

    await this.getLeaderboardData(boardId);
  }

  static async removeAdminFromBoard(boardId, email) {
    const payload = {
      boardId,
      email
    };

    try {
      await Axios.put(
        `${this.apiUrl}/leaderboad/admins/remove`,
        payload,
        LeaderboardController.getHeaders()
      );
    } catch (e) {
      NotificationController.setError(e.message);
    }

    store.commit("removeAdminFromBoard", { boardId, email });
    await this.getLeaderboardData(boardId);
  }

  static async updateBoard(board) {
    try {
      await Axios.put(
        `${this.apiUrl}/leaderboad/${board.id}`,
        board,
        LeaderboardController.getHeaders()
      );
    } catch (e) {
      NotificationController.setError(e.message);
    }

    store.commit("updateBoard", board);
  }

  static getHeaders = () => {
    return {
      headers: { Authorization: `Bearer ${store.getters.getAuthToken}` }
    };
  };
}
