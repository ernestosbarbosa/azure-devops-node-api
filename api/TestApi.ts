/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.

import * as restm from 'typed-rest-client/RestClient';
import * as httpm from 'typed-rest-client/HttpClient';
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TestInterfaces = require("./interfaces/TestInterfaces");
import TfsCoreInterfaces = require("./interfaces/CoreInterfaces");

export interface ITestApi extends basem.ClientApiBase {
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Promise<TestInterfaces.TestActionResultModel[]>;
    createAfnStrip(afnStrip: TestInterfaces.AfnStrip, project: string): Promise<TestInterfaces.AfnStrip>;
    getAfnStrips(project: string, testCaseIds?: number[]): Promise<TestInterfaces.AfnStrip[]>;
    createTestIterationResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Promise<TestInterfaces.TestAttachmentReference>;
    createTestResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): Promise<TestInterfaces.TestAttachmentReference>;
    createTestSubResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, testSubResultId: number): Promise<TestInterfaces.TestAttachmentReference>;
    getTestResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestResultAttachments(project: string, runId: number, testCaseResultId: number): Promise<TestInterfaces.TestAttachment[]>;
    getTestResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestSubResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number, testSubResultId: number): Promise<NodeJS.ReadableStream>;
    getTestSubResultAttachments(project: string, runId: number, testCaseResultId: number, testSubResultId: number): Promise<TestInterfaces.TestAttachment[]>;
    getTestSubResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number, testSubResultId: number): Promise<NodeJS.ReadableStream>;
    createTestRunAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number): Promise<TestInterfaces.TestAttachmentReference>;
    getTestRunAttachmentContent(project: string, runId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestRunAttachments(project: string, runId: number): Promise<TestInterfaces.TestAttachment[]>;
    getTestRunAttachmentZip(project: string, runId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getBugsLinkedToTestResult(project: string, runId: number, testCaseResultId: number): Promise<TestInterfaces.WorkItemReference[]>;
    getCloneInformation(project: string, cloneOperationId: number, includeDetails?: boolean): Promise<TestInterfaces.CloneOperationInformation>;
    cloneTestPlan(cloneRequestBody: TestInterfaces.TestPlanCloneRequest, project: string, planId: number): Promise<TestInterfaces.CloneOperationInformation>;
    cloneTestSuite(cloneRequestBody: TestInterfaces.TestSuiteCloneRequest, project: string, planId: number, sourceSuiteId: number): Promise<TestInterfaces.CloneOperationInformation>;
    getBuildCodeCoverage(project: string, buildId: number, flags: number): Promise<TestInterfaces.BuildCoverage[]>;
    getCodeCoverageSummary(project: string, buildId: number, deltaBuildId?: number): Promise<TestInterfaces.CodeCoverageSummary>;
    updateCodeCoverageSummary(coverageData: TestInterfaces.CodeCoverageData, project: string, buildId: number): Promise<void>;
    getTestRunCodeCoverage(project: string, runId: number, flags: number): Promise<TestInterfaces.TestRunCoverage[]>;
    createTestConfiguration(testConfiguration: TestInterfaces.TestConfiguration, project: string): Promise<TestInterfaces.TestConfiguration>;
    deleteTestConfiguration(project: string, testConfigurationId: number): Promise<void>;
    getTestConfigurationById(project: string, testConfigurationId: number): Promise<TestInterfaces.TestConfiguration>;
    getTestConfigurations(project: string, skip?: number, top?: number, continuationToken?: string, includeAllProperties?: boolean): Promise<TestInterfaces.TestConfiguration[]>;
    updateTestConfiguration(testConfiguration: TestInterfaces.TestConfiguration, project: string, testConfigurationId: number): Promise<TestInterfaces.TestConfiguration>;
    addCustomFields(newFields: TestInterfaces.CustomTestFieldDefinition[], project: string): Promise<TestInterfaces.CustomTestFieldDefinition[]>;
    queryCustomFields(project: string, scopeFilter: TestInterfaces.CustomTestFieldScope): Promise<TestInterfaces.CustomTestFieldDefinition[]>;
    queryTestResultHistory(filter: TestInterfaces.ResultsFilter, project: string): Promise<TestInterfaces.TestResultHistory>;
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean): Promise<TestInterfaces.TestIterationDetailsModel>;
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean): Promise<TestInterfaces.TestIterationDetailsModel[]>;
    getLinkedWorkItemsByQuery(workItemQuery: TestInterfaces.LinkedWorkItemsQuery, project: string): Promise<TestInterfaces.LinkedWorkItemsQueryResult[]>;
    getTestRunLogs(project: string, runId: number): Promise<TestInterfaces.TestMessageLogDetails[]>;
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string): Promise<TestInterfaces.TestResultParameterModel[]>;
    createTestPlan(testPlan: TestInterfaces.PlanUpdateModel, project: string): Promise<TestInterfaces.TestPlan>;
    deleteTestPlan(project: string, planId: number): Promise<void>;
    getPlanById(project: string, planId: number): Promise<TestInterfaces.TestPlan>;
    getPlans(project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean): Promise<TestInterfaces.TestPlan[]>;
    updateTestPlan(planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number): Promise<TestInterfaces.TestPlan>;
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields?: string): Promise<TestInterfaces.TestPoint>;
    getPoints(project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number): Promise<TestInterfaces.TestPoint[]>;
    updateTestPoints(pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string): Promise<TestInterfaces.TestPoint[]>;
    getPointsByQuery(query: TestInterfaces.TestPointsQuery, project: string, skip?: number, top?: number): Promise<TestInterfaces.TestPointsQuery>;
    getTestResultDetailsForBuild(project: string, buildId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string, shouldIncludeResults?: boolean, queryRunSummaryForInProgress?: boolean): Promise<TestInterfaces.TestResultsDetails>;
    getTestResultDetailsForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string, shouldIncludeResults?: boolean, queryRunSummaryForInProgress?: boolean): Promise<TestInterfaces.TestResultsDetails>;
    publishTestResultDocument(document: TestInterfaces.TestResultDocument, project: string, runId: number): Promise<TestInterfaces.TestResultDocument>;
    getResultGroupsByBuild(project: string, buildId: number, publishContext: string, fields?: string[], continuationToken?: string): Promise<TestInterfaces.FieldDetailsForTestResults[]>;
    getResultGroupsByRelease(project: string, releaseId: number, publishContext: string, releaseEnvId?: number, fields?: string[], continuationToken?: string): Promise<TestInterfaces.FieldDetailsForTestResults[]>;
    getResultRetentionSettings(project: string): Promise<TestInterfaces.ResultRetentionSettings>;
    updateResultRetentionSettings(retentionSettings: TestInterfaces.ResultRetentionSettings, project: string): Promise<TestInterfaces.ResultRetentionSettings>;
    addTestResultsToTestRun(results: TestInterfaces.TestCaseResult[], project: string, runId: number): Promise<TestInterfaces.TestCaseResult[]>;
    getTestResultById(isTfs: boolean, project: string, runId: number, testCaseResultId: number, detailsToInclude?: TestInterfaces.ResultDetails): Promise<TestInterfaces.TestCaseResult>;
    getTestResults(project: string, runId: number, detailsToInclude?: TestInterfaces.ResultDetails, skip?: number, top?: number, outcomes?: TestInterfaces.TestOutcome[]): Promise<TestInterfaces.TestCaseResult[]>;
    updateTestResults(results: TestInterfaces.TestCaseResult[], project: string, runId: number): Promise<TestInterfaces.TestCaseResult[]>;
    getTestResultsByQuery(query: TestInterfaces.TestResultsQuery, project: string): Promise<TestInterfaces.TestResultsQuery>;
    getTestResultsByBuild(project: string, buildId: number, publishContext?: string, outcomes?: TestInterfaces.TestOutcome[], top?: number, continuationToken?: string): Promise<TestInterfaces.ShallowTestCaseResult[]>;
    getTestResultsByRelease(project: string, releaseId: number, releaseEnvid?: number, publishContext?: string, outcomes?: TestInterfaces.TestOutcome[], top?: number, continuationToken?: string): Promise<TestInterfaces.ShallowTestCaseResult[]>;
    queryTestResultsReportForBuild(project: string, buildId: number, publishContext?: string, includeFailureDetails?: boolean, buildToCompare?: TestInterfaces.BuildReference): Promise<TestInterfaces.TestResultSummary>;
    queryTestResultsReportForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, includeFailureDetails?: boolean, releaseToCompare?: TestInterfaces.ReleaseReference): Promise<TestInterfaces.TestResultSummary>;
    queryTestResultsSummaryForReleases(releases: TestInterfaces.ReleaseReference[], project: string): Promise<TestInterfaces.TestResultSummary[]>;
    queryTestSummaryByRequirement(resultsContext: TestInterfaces.TestResultsContext, project: string, workItemIds?: number[]): Promise<TestInterfaces.TestSummaryForWorkItem[]>;
    queryResultTrendForBuild(filter: TestInterfaces.TestResultTrendFilter, project: string): Promise<TestInterfaces.AggregatedDataForResultTrend[]>;
    queryResultTrendForRelease(filter: TestInterfaces.TestResultTrendFilter, project: string): Promise<TestInterfaces.AggregatedDataForResultTrend[]>;
    getTestRunStatistics(project: string, runId: number): Promise<TestInterfaces.TestRunStatistic>;
    createTestRun(testRun: TestInterfaces.RunCreateModel, project: string): Promise<TestInterfaces.TestRun>;
    deleteTestRun(project: string, runId: number): Promise<void>;
    getTestRunById(project: string, runId: number, includeDetails?: boolean): Promise<TestInterfaces.TestRun>;
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): Promise<TestInterfaces.TestRun[]>;
    queryTestRuns(project: string, minLastUpdatedDate: Date, maxLastUpdatedDate: Date, state?: TestInterfaces.TestRunState, planIds?: number[], isAutomated?: boolean, publishContext?: TestInterfaces.TestRunPublishContext, buildIds?: number[], buildDefIds?: number[], branchName?: string, releaseIds?: number[], releaseDefIds?: number[], releaseEnvIds?: number[], releaseEnvDefIds?: number[], runTitle?: string, top?: number, continuationToken?: string): Promise<TestInterfaces.TestRun[]>;
    updateTestRun(runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number): Promise<TestInterfaces.TestRun>;
    createTestSession(testSession: TestInterfaces.TestSession, teamContext: TfsCoreInterfaces.TeamContext): Promise<TestInterfaces.TestSession>;
    getTestSessions(teamContext: TfsCoreInterfaces.TeamContext, period?: number, allSessions?: boolean, includeAllProperties?: boolean, source?: TestInterfaces.TestSessionSource, includeOnlyCompletedSessions?: boolean): Promise<TestInterfaces.TestSession[]>;
    updateTestSession(testSession: TestInterfaces.TestSession, teamContext: TfsCoreInterfaces.TeamContext): Promise<TestInterfaces.TestSession>;
    deleteSharedParameter(project: string, sharedParameterId: number): Promise<void>;
    deleteSharedStep(project: string, sharedStepId: number): Promise<void>;
    getSuiteEntries(project: string, suiteId: number): Promise<TestInterfaces.SuiteEntry[]>;
    reorderSuiteEntries(suiteEntries: TestInterfaces.SuiteEntryUpdateModel[], project: string, suiteId: number): Promise<TestInterfaces.SuiteEntry[]>;
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string): Promise<TestInterfaces.SuiteTestCase[]>;
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number): Promise<TestInterfaces.SuiteTestCase>;
    getTestCases(project: string, planId: number, suiteId: number): Promise<TestInterfaces.SuiteTestCase[]>;
    removeTestCasesFromSuiteUrl(project: string, planId: number, suiteId: number, testCaseIds: string): Promise<void>;
    updateSuiteTestCases(suiteTestCaseUpdateModel: TestInterfaces.SuiteTestCaseUpdateModel, project: string, planId: number, suiteId: number, testCaseIds: string): Promise<TestInterfaces.SuiteTestCase[]>;
    createTestSuite(testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number): Promise<TestInterfaces.TestSuite[]>;
    deleteTestSuite(project: string, planId: number, suiteId: number): Promise<void>;
    getTestSuiteById(project: string, planId: number, suiteId: number, expand?: number): Promise<TestInterfaces.TestSuite>;
    getTestSuitesForPlan(project: string, planId: number, expand?: number, skip?: number, top?: number, asTreeView?: boolean): Promise<TestInterfaces.TestSuite[]>;
    updateTestSuite(suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number): Promise<TestInterfaces.TestSuite>;
    getSuitesByTestCaseId(testCaseId: number): Promise<TestInterfaces.TestSuite[]>;
    deleteTestCase(project: string, testCaseId: number): Promise<void>;
    queryTestHistory(filter: TestInterfaces.TestHistoryQuery, project: string): Promise<TestInterfaces.TestHistoryQuery>;
    createTestSettings(testSettings: TestInterfaces.TestSettings, project: string): Promise<number>;
    deleteTestSettings(project: string, testSettingsId: number): Promise<void>;
    getTestSettingsById(project: string, testSettingsId: number): Promise<TestInterfaces.TestSettings>;
    createTestVariable(testVariable: TestInterfaces.TestVariable, project: string): Promise<TestInterfaces.TestVariable>;
    deleteTestVariable(project: string, testVariableId: number): Promise<void>;
    getTestVariableById(project: string, testVariableId: number): Promise<TestInterfaces.TestVariable>;
    getTestVariables(project: string, skip?: number, top?: number): Promise<TestInterfaces.TestVariable[]>;
    updateTestVariable(testVariable: TestInterfaces.TestVariable, project: string, testVariableId: number): Promise<TestInterfaces.TestVariable>;
    addWorkItemToTestLinks(workItemToTestLinks: TestInterfaces.WorkItemToTestLinks, project: string): Promise<TestInterfaces.WorkItemToTestLinks>;
    deleteTestMethodToWorkItemLink(project: string, testName: string, workItemId: number): Promise<boolean>;
    queryTestMethodLinkedWorkItems(project: string, testName: string): Promise<TestInterfaces.TestToWorkItemLinks>;
    queryTestResultWorkItems(project: string, workItemCategory: string, automatedTestName?: string, testCaseId?: number, maxCompleteDate?: Date, days?: number, workItemCount?: number): Promise<TestInterfaces.WorkItemReference[]>;
}

export class TestApi extends basem.ClientApiBase implements ITestApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions, isTfs?: boolean) {
        super(baseUrl, handlers, 'node-Test-api', options);
        this.isTfs = isTfs;
    }
    public isTfs: boolean;

    public static readonly RESOURCE_AREA_ID = "c2aa639c-3ccc-4740-b3b6-ce2a1e1d984e";

    /**
     * Gets the action results for an iteration in a test result.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test result that contains the iterations.
     * @param {number} iterationId - ID of the iteration that contains the actions.
     * @param {string} actionPath - Path of a specific action, used to get just that action.
     */
    public async getActionResults(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        actionPath?: string
    ): Promise<TestInterfaces.TestActionResultModel[]> {

        return new Promise<TestInterfaces.TestActionResultModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                iterationId: iterationId,
                actionPath: actionPath
            };

            try {
                let verData: vsom.ClientVersioningData;
                if (this.isTfs) {
                    verData = await this.vsoClient.getVersioningDataOld(
                        "5.0-preview.3",
                        "Test",
                        "eaf40c31-ff84-4062-aafd-d5664be11a37",
                        routeValues);
                } else {
                    verData = await this.vsoClient.getVersioningData(
                        "5.0-preview.3",
                        "Test",
                        "eaf40c31-ff84-4062-aafd-d5664be11a37",
                        routeValues);
                }

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestActionResultModel[]>;
                res = await this.rest.get<TestInterfaces.TestActionResultModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestActionResultModel,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create AfnStrip
     * 
     * @param {TestInterfaces.AfnStrip} afnStrip - AfnStrip request payload
     * @param {string} project - Project ID or project name
     */
    public async createAfnStrip(
        afnStrip: TestInterfaces.AfnStrip,
        project: string
    ): Promise<TestInterfaces.AfnStrip> {

        return new Promise<TestInterfaces.AfnStrip>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData;
                if (this.isTfs) {
                    verData = await this.vsoClient.getVersioningDataOld(
                        "5.0-preview.1",
                        "Test",
                        "708cd155-cd42-48c1-8679-decc9929c3ad",
                        routeValues);
                } else {
                    verData = await this.vsoClient.getVersioningData(
                        "5.0-preview.1",
                        "Test",
                        "708cd155-cd42-48c1-8679-decc9929c3ad",
                        routeValues);
                }

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.AfnStrip>;
                res = await this.rest.create<TestInterfaces.AfnStrip>(url, afnStrip, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.AfnStrip,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get list of afnStrips by testcaseid
     * 
     * @param {string} project - Project ID or project name
     * @param {number[]} testCaseIds - Ids of testcases
     */
    public async getAfnStrips(
        project: string,
        testCaseIds?: number[]
    ): Promise<TestInterfaces.AfnStrip[]> {

        return new Promise<TestInterfaces.AfnStrip[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testCaseIds: testCaseIds && testCaseIds.join(","),
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "708cd155-cd42-48c1-8679-decc9929c3ad",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.AfnStrip[]>;
                res = await this.rest.get<TestInterfaces.AfnStrip[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.AfnStrip,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Attach a file to test step result
     * 
     * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel - Attachment details TestAttachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test result that contains the iteration
     * @param {number} iterationId - ID of the test result iteration.
     * @param {string} actionPath - Hex value of test result action path.
     */
    public async createTestIterationResultAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        actionPath?: string
    ): Promise<TestInterfaces.TestAttachmentReference> {

        return new Promise<TestInterfaces.TestAttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                iterationId: iterationId,
                actionPath: actionPath,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestAttachmentReference>;
                res = await this.rest.create<TestInterfaces.TestAttachmentReference>(url, attachmentRequestModel, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Attach a file to a test result.
     * 
     * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel - Attachment details TestAttachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test result against which attachment has to be uploaded.
     */
    public async createTestResultAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number
    ): Promise<TestInterfaces.TestAttachmentReference> {

        return new Promise<TestInterfaces.TestAttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestAttachmentReference>;
                res = await this.rest.create<TestInterfaces.TestAttachmentReference>(url, attachmentRequestModel, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Attach a file to a test result
     * 
     * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel - Attachment Request Model.
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test results that contains sub result.
     * @param {number} testSubResultId - ID of the test sub results against which attachment has to be uploaded.
     */
    public async createTestSubResultAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number,
        testSubResultId: number
    ): Promise<TestInterfaces.TestAttachmentReference> {

        return new Promise<TestInterfaces.TestAttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                testSubResultId: testSubResultId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestAttachmentReference>;
                res = await this.rest.create<TestInterfaces.TestAttachmentReference>(url, attachmentRequestModel, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Download a test result attachment by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the testCaseResultId.
     * @param {number} testCaseResultId - ID of the test result whose attachment has to be downloaded.
     * @param {number} attachmentId - ID of the test result attachment to be downloaded.
     */
    public async getTestResultAttachmentContent(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get list of test result attachments reference.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test result.
     */
    public async getTestResultAttachments(
        project: string,
        runId: number,
        testCaseResultId: number
    ): Promise<TestInterfaces.TestAttachment[]> {

        return new Promise<TestInterfaces.TestAttachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestAttachment[]>;
                res = await this.rest.get<TestInterfaces.TestAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestAttachment,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Download a test result attachment by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the testCaseResultId.
     * @param {number} testCaseResultId - ID of the test result whose attachment has to be downloaded.
     * @param {number} attachmentId - ID of the test result attachment to be downloaded.
     */
    public async getTestResultAttachmentZip(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Download a test sub result attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test results that contains sub result.
     * @param {number} attachmentId - ID of the test result attachment to be downloaded
     * @param {number} testSubResultId - ID of the test sub result whose attachment has to be downloaded
     */
    public async getTestSubResultAttachmentContent(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
        testSubResultId: number
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            let queryValues: any = {
                testSubResultId: testSubResultId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get list of test sub result attachments
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test results that contains sub result.
     * @param {number} testSubResultId - ID of the test sub result whose attachment has to be downloaded
     */
    public async getTestSubResultAttachments(
        project: string,
        runId: number,
        testCaseResultId: number,
        testSubResultId: number
    ): Promise<TestInterfaces.TestAttachment[]> {

        return new Promise<TestInterfaces.TestAttachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                testSubResultId: testSubResultId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestAttachment[]>;
                res = await this.rest.get<TestInterfaces.TestAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestAttachment,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Download a test sub result attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test results that contains sub result.
     * @param {number} attachmentId - ID of the test result attachment to be downloaded
     * @param {number} testSubResultId - ID of the test sub result whose attachment has to be downloaded
     */
    public async getTestSubResultAttachmentZip(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
        testSubResultId: number
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            let queryValues: any = {
                testSubResultId: testSubResultId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Attach a file to a test run.
     * 
     * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel - Attachment details TestAttachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run against which attachment has to be uploaded.
     */
    public async createTestRunAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number
    ): Promise<TestInterfaces.TestAttachmentReference> {

        return new Promise<TestInterfaces.TestAttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "4f004af4-a507-489c-9b13-cb62060beb11",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestAttachmentReference>;
                res = await this.rest.create<TestInterfaces.TestAttachmentReference>(url, attachmentRequestModel, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Download a test run attachment by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run whose attachment has to be downloaded.
     * @param {number} attachmentId - ID of the test run attachment to be downloaded.
     */
    public async getTestRunAttachmentContent(
        project: string,
        runId: number,
        attachmentId: number
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "4f004af4-a507-489c-9b13-cb62060beb11",
                    routeValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get list of test run attachments reference.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run.
     */
    public async getTestRunAttachments(
        project: string,
        runId: number
    ): Promise<TestInterfaces.TestAttachment[]> {

        return new Promise<TestInterfaces.TestAttachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "4f004af4-a507-489c-9b13-cb62060beb11",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestAttachment[]>;
                res = await this.rest.get<TestInterfaces.TestAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestAttachment,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Download a test run attachment by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run whose attachment has to be downloaded.
     * @param {number} attachmentId - ID of the test run attachment to be downloaded.
     */
    public async getTestRunAttachmentZip(
        project: string,
        runId: number,
        attachmentId: number
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "4f004af4-a507-489c-9b13-cb62060beb11",
                    routeValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     */
    public async getBugsLinkedToTestResult(
        project: string,
        runId: number,
        testCaseResultId: number
    ): Promise<TestInterfaces.WorkItemReference[]> {

        return new Promise<TestInterfaces.WorkItemReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "6de20ca2-67de-4faf-97fa-38c5d585eb00",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.WorkItemReference[]>;
                res = await this.rest.get<TestInterfaces.WorkItemReference[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get clone information.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} cloneOperationId - Operation ID returned when we queue a clone operation
     * @param {boolean} includeDetails - If false returns only status of the clone operation information, if true returns complete clone information
     */
    public async getCloneInformation(
        project: string,
        cloneOperationId: number,
        includeDetails?: boolean
    ): Promise<TestInterfaces.CloneOperationInformation> {

        return new Promise<TestInterfaces.CloneOperationInformation>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                cloneOperationId: cloneOperationId
            };

            let queryValues: any = {
                '$includeDetails': includeDetails,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "5b9d6320-abed-47a5-a151-cd6dc3798be6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.CloneOperationInformation>;
                res = await this.rest.get<TestInterfaces.CloneOperationInformation>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.CloneOperationInformation,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Clone test plan
     * 
     * @param {TestInterfaces.TestPlanCloneRequest} cloneRequestBody - Plan Clone Request Body detail TestPlanCloneRequest
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan to be cloned.
     */
    public async cloneTestPlan(
        cloneRequestBody: TestInterfaces.TestPlanCloneRequest,
        project: string,
        planId: number
    ): Promise<TestInterfaces.CloneOperationInformation> {

        return new Promise<TestInterfaces.CloneOperationInformation>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "edc3ef4b-8460-4e86-86fa-8e4f5e9be831",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.CloneOperationInformation>;
                res = await this.rest.create<TestInterfaces.CloneOperationInformation>(url, cloneRequestBody, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.CloneOperationInformation,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Clone test suite
     * 
     * @param {TestInterfaces.TestSuiteCloneRequest} cloneRequestBody - Suite Clone Request Body detail TestSuiteCloneRequest
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan in which suite to be cloned is present
     * @param {number} sourceSuiteId - ID of the test suite to be cloned
     */
    public async cloneTestSuite(
        cloneRequestBody: TestInterfaces.TestSuiteCloneRequest,
        project: string,
        planId: number,
        sourceSuiteId: number
    ): Promise<TestInterfaces.CloneOperationInformation> {

        return new Promise<TestInterfaces.CloneOperationInformation>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                sourceSuiteId: sourceSuiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "751e4ab5-5bf6-4fb5-9d5d-19ef347662dd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.CloneOperationInformation>;
                res = await this.rest.create<TestInterfaces.CloneOperationInformation>(url, cloneRequestBody, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.CloneOperationInformation,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get code coverage data for a build.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId - ID of the build for which code coverage data needs to be fetched.
     * @param {number} flags - Value of flags determine the level of code coverage details to be fetched. Flags are additive. Expected Values are 1 for Modules, 2 for Functions, 4 for BlockData.
     */
    public async getBuildCodeCoverage(
        project: string,
        buildId: number,
        flags: number
    ): Promise<TestInterfaces.BuildCoverage[]> {

        return new Promise<TestInterfaces.BuildCoverage[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                flags: flags,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "77560e8a-4e8c-4d59-894e-a5f264c24444",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.BuildCoverage[]>;
                res = await this.rest.get<TestInterfaces.BuildCoverage[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.BuildCoverage,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get Code Coverage Summary for Build.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId - ID of the build for which code coverage data needs to be fetched.
     * @param {number} deltaBuildId - Delta Build id (optional)
     */
    public async getCodeCoverageSummary(
        project: string,
        buildId: number,
        deltaBuildId?: number
    ): Promise<TestInterfaces.CodeCoverageSummary> {

        return new Promise<TestInterfaces.CodeCoverageSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                deltaBuildId: deltaBuildId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "77560e8a-4e8c-4d59-894e-a5f264c24444",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.CodeCoverageSummary>;
                res = await this.rest.get<TestInterfaces.CodeCoverageSummary>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
     * 
     * @param {TestInterfaces.CodeCoverageData} coverageData
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     */
    public async updateCodeCoverageSummary(
        coverageData: TestInterfaces.CodeCoverageData,
        project: string,
        buildId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "77560e8a-4e8c-4d59-894e-a5f264c24444",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, coverageData, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get code coverage data for a test run
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run for which code coverage data needs to be fetched.
     * @param {number} flags - Value of flags determine the level of code coverage details to be fetched. Flags are additive. Expected Values are 1 for Modules, 2 for Functions, 4 for BlockData.
     */
    public async getTestRunCodeCoverage(
        project: string,
        runId: number,
        flags: number
    ): Promise<TestInterfaces.TestRunCoverage[]> {

        return new Promise<TestInterfaces.TestRunCoverage[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                flags: flags,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "9629116f-3b89-4ed8-b358-d4694efda160",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestRunCoverage[]>;
                res = await this.rest.get<TestInterfaces.TestRunCoverage[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a test configuration
     * 
     * @param {TestInterfaces.TestConfiguration} testConfiguration - Test configuration
     * @param {string} project - Project ID or project name
     */
    public async createTestConfiguration(
        testConfiguration: TestInterfaces.TestConfiguration,
        project: string
    ): Promise<TestInterfaces.TestConfiguration> {

        return new Promise<TestInterfaces.TestConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestConfiguration>;
                res = await this.rest.create<TestInterfaces.TestConfiguration>(url, testConfiguration, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestConfiguration,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a test configuration
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId - ID of the test configuration to get.
     */
    public async deleteTestConfiguration(
        project: string,
        testConfigurationId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testConfigurationId: testConfigurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a test configuration
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId - ID of the test configuration to get.
     */
    public async getTestConfigurationById(
        project: string,
        testConfigurationId: number
    ): Promise<TestInterfaces.TestConfiguration> {

        return new Promise<TestInterfaces.TestConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testConfigurationId: testConfigurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestConfiguration>;
                res = await this.rest.get<TestInterfaces.TestConfiguration>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestConfiguration,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test configurations
     * 
     * @param {string} project - Project ID or project name
     * @param {number} skip - Number of test configurations to skip.
     * @param {number} top - Number of test configurations to return.
     * @param {string} continuationToken - If the list of configurations returned is not complete, a continuation token to query next batch of configurations is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test configurations.
     * @param {boolean} includeAllProperties - If true, it returns all properties of the test configurations. Otherwise, it returns the skinny version.
     */
    public async getTestConfigurations(
        project: string,
        skip?: number,
        top?: number,
        continuationToken?: string,
        includeAllProperties?: boolean
    ): Promise<TestInterfaces.TestConfiguration[]> {

        return new Promise<TestInterfaces.TestConfiguration[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                '$skip': skip,
                '$top': top,
                continuationToken: continuationToken,
                includeAllProperties: includeAllProperties,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestConfiguration[]>;
                res = await this.rest.get<TestInterfaces.TestConfiguration[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestConfiguration,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a test configuration
     * 
     * @param {TestInterfaces.TestConfiguration} testConfiguration - Test configuration
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId - ID of the test configuration to update.
     */
    public async updateTestConfiguration(
        testConfiguration: TestInterfaces.TestConfiguration,
        project: string,
        testConfigurationId: number
    ): Promise<TestInterfaces.TestConfiguration> {

        return new Promise<TestInterfaces.TestConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testConfigurationId: testConfigurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestConfiguration>;
                res = await this.rest.update<TestInterfaces.TestConfiguration>(url, testConfiguration, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestConfiguration,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.CustomTestFieldDefinition[]} newFields
     * @param {string} project - Project ID or project name
     */
    public async addCustomFields(
        newFields: TestInterfaces.CustomTestFieldDefinition[],
        project: string
    ): Promise<TestInterfaces.CustomTestFieldDefinition[]> {

        return new Promise<TestInterfaces.CustomTestFieldDefinition[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "8ce1923b-f4c7-4e22-b93b-f6284e525ec2",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.CustomTestFieldDefinition[]>;
                res = await this.rest.create<TestInterfaces.CustomTestFieldDefinition[]>(url, newFields, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.CustomTestFieldDefinition,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {TestInterfaces.CustomTestFieldScope} scopeFilter
     */
    public async queryCustomFields(
        project: string,
        scopeFilter: TestInterfaces.CustomTestFieldScope
    ): Promise<TestInterfaces.CustomTestFieldDefinition[]> {

        return new Promise<TestInterfaces.CustomTestFieldDefinition[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                scopeFilter: scopeFilter,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "8ce1923b-f4c7-4e22-b93b-f6284e525ec2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.CustomTestFieldDefinition[]>;
                res = await this.rest.get<TestInterfaces.CustomTestFieldDefinition[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.CustomTestFieldDefinition,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.ResultsFilter} filter
     * @param {string} project - Project ID or project name
     */
    public async queryTestResultHistory(
        filter: TestInterfaces.ResultsFilter,
        project: string
    ): Promise<TestInterfaces.TestResultHistory> {

        return new Promise<TestInterfaces.TestResultHistory>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "234616f5-429c-4e7b-9192-affd76731dfd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestResultHistory>;
                res = await this.rest.create<TestInterfaces.TestResultHistory>(url, filter, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestResultHistory,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get iteration for a result
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test result that contains the iterations.
     * @param {number} iterationId - Id of the test results Iteration.
     * @param {boolean} includeActionResults - Include result details for each action performed in the test iteration. ActionResults refer to outcome (pass/fail) of test steps that are executed as part of a running a manual test. Including the ActionResults flag gets the outcome of test steps in the actionResults section and test parameters in the parameters section for each test iteration.
     */
    public async getTestIteration(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        includeActionResults?: boolean
    ): Promise<TestInterfaces.TestIterationDetailsModel> {

        return new Promise<TestInterfaces.TestIterationDetailsModel>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                iterationId: iterationId
            };

            let queryValues: any = {
                includeActionResults: includeActionResults,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "73eb9074-3446-4c44-8296-2f811950ff8d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestIterationDetailsModel>;
                res = await this.rest.get<TestInterfaces.TestIterationDetailsModel>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestIterationDetailsModel,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get iterations for a result
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test result that contains the iterations.
     * @param {boolean} includeActionResults - Include result details for each action performed in the test iteration. ActionResults refer to outcome (pass/fail) of test steps that are executed as part of a running a manual test. Including the ActionResults flag gets the outcome of test steps in the actionResults section and test parameters in the parameters section for each test iteration.
     */
    public async getTestIterations(
        project: string,
        runId: number,
        testCaseResultId: number,
        includeActionResults?: boolean
    ): Promise<TestInterfaces.TestIterationDetailsModel[]> {

        return new Promise<TestInterfaces.TestIterationDetailsModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                includeActionResults: includeActionResults,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "73eb9074-3446-4c44-8296-2f811950ff8d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestIterationDetailsModel[]>;
                res = await this.rest.get<TestInterfaces.TestIterationDetailsModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestIterationDetailsModel,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.LinkedWorkItemsQuery} workItemQuery
     * @param {string} project - Project ID or project name
     */
    public async getLinkedWorkItemsByQuery(
        workItemQuery: TestInterfaces.LinkedWorkItemsQuery,
        project: string
    ): Promise<TestInterfaces.LinkedWorkItemsQueryResult[]> {

        return new Promise<TestInterfaces.LinkedWorkItemsQueryResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "a4dcb25b-9878-49ea-abfd-e440bd9b1dcd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.LinkedWorkItemsQueryResult[]>;
                res = await this.rest.create<TestInterfaces.LinkedWorkItemsQueryResult[]>(url, workItemQuery, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test run message logs
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the run to get.
     */
    public async getTestRunLogs(
        project: string,
        runId: number
    ): Promise<TestInterfaces.TestMessageLogDetails[]> {

        return new Promise<TestInterfaces.TestMessageLogDetails[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "a1e55200-637e-42e9-a7c0-7e5bfdedb1b3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestMessageLogDetails[]>;
                res = await this.rest.get<TestInterfaces.TestMessageLogDetails[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestMessageLogDetails,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of parameterized results
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the test run that contains the result.
     * @param {number} testCaseResultId - ID of the test result that contains the iterations.
     * @param {number} iterationId - ID of the iteration that contains the parameterized results.
     * @param {string} paramName - Name of the parameter.
     */
    public async getResultParameters(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        paramName?: string
    ): Promise<TestInterfaces.TestResultParameterModel[]> {

        return new Promise<TestInterfaces.TestResultParameterModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                iterationId: iterationId
            };

            let queryValues: any = {
                paramName: paramName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "7c69810d-3354-4af3-844a-180bd25db08a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestResultParameterModel[]>;
                res = await this.rest.get<TestInterfaces.TestResultParameterModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a test plan.
     * 
     * @param {TestInterfaces.PlanUpdateModel} testPlan - A test plan object.
     * @param {string} project - Project ID or project name
     */
    public async createTestPlan(
        testPlan: TestInterfaces.PlanUpdateModel,
        project: string
    ): Promise<TestInterfaces.TestPlan> {

        return new Promise<TestInterfaces.TestPlan>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "51712106-7278-4208-8563-1c96f40cf5e4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestPlan>;
                res = await this.rest.create<TestInterfaces.TestPlan>(url, testPlan, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestPlan,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a test plan.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan to be deleted.
     */
    public async deleteTestPlan(
        project: string,
        planId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "51712106-7278-4208-8563-1c96f40cf5e4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test plan by ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan to return.
     */
    public async getPlanById(
        project: string,
        planId: number
    ): Promise<TestInterfaces.TestPlan> {

        return new Promise<TestInterfaces.TestPlan>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData;
                if (this.isTfs) {
                    verData = await this.vsoClient.getVersioningDataOld(
                        "5.0-preview.2",
                        "Test",
                        "51712106-7278-4208-8563-1c96f40cf5e4",
                        routeValues);
                } else {
                    verData = await this.vsoClient.getVersioningData(
                        "5.0-preview.2",
                        "Test",
                        "51712106-7278-4208-8563-1c96f40cf5e4",
                        routeValues);
                }

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestPlan>;
                res = await this.rest.get<TestInterfaces.TestPlan>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestPlan,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test plans.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} owner - Filter for test plan by owner ID or name.
     * @param {number} skip - Number of test plans to skip.
     * @param {number} top - Number of test plans to return.
     * @param {boolean} includePlanDetails - Get all properties of the test plan.
     * @param {boolean} filterActivePlans - Get just the active plans.
     */
    public async getPlans(
        project: string,
        owner?: string,
        skip?: number,
        top?: number,
        includePlanDetails?: boolean,
        filterActivePlans?: boolean
    ): Promise<TestInterfaces.TestPlan[]> {

        return new Promise<TestInterfaces.TestPlan[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                owner: owner,
                '$skip': skip,
                '$top': top,
                includePlanDetails: includePlanDetails,
                filterActivePlans: filterActivePlans,
            };

            try {
                let verData: vsom.ClientVersioningData;
                if (this.isTfs) {
                    verData = await this.vsoClient.getVersioningDataOld(
                        "5.0-preview.2",
                        "Test",
                        "51712106-7278-4208-8563-1c96f40cf5e4",
                        routeValues,
                        queryValues);
                } else {
                    verData = await this.vsoClient.getVersioningData(
                        "5.0-preview.2",
                        "Test",
                        "51712106-7278-4208-8563-1c96f40cf5e4",
                        routeValues,
                        queryValues);
                }

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestPlan[]>;
                res = await this.rest.get<TestInterfaces.TestPlan[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestPlan,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a test plan.
     * 
     * @param {TestInterfaces.PlanUpdateModel} planUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan to be updated.
     */
    public async updateTestPlan(
        planUpdateModel: TestInterfaces.PlanUpdateModel,
        project: string,
        planId: number
    ): Promise<TestInterfaces.TestPlan> {

        return new Promise<TestInterfaces.TestPlan>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "51712106-7278-4208-8563-1c96f40cf5e4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestPlan>;
                res = await this.rest.update<TestInterfaces.TestPlan>(url, planUpdateModel, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestPlan,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a test point.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan.
     * @param {number} suiteId - ID of the suite that contains the point.
     * @param {number} pointIds - ID of the test point to get.
     * @param {string} witFields - Comma-separated list of work item field names.
     */
    public async getPoint(
        project: string,
        planId: number,
        suiteId: number,
        pointIds: number,
        witFields?: string
    ): Promise<TestInterfaces.TestPoint> {

        return new Promise<TestInterfaces.TestPoint>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                pointIds: pointIds
            };

            let queryValues: any = {
                witFields: witFields,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "3bcfd5c8-be62-488e-b1da-b8289ce9299c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestPoint>;
                res = await this.rest.get<TestInterfaces.TestPoint>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestPoint,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test points.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan.
     * @param {number} suiteId - ID of the suite that contains the points.
     * @param {string} witFields - Comma-separated list of work item field names.
     * @param {string} configurationId - Get test points for specific configuration.
     * @param {string} testCaseId - Get test points for a specific test case, valid when configurationId is not set.
     * @param {string} testPointIds - Get test points for comma-separated list of test point IDs, valid only when configurationId and testCaseId are not set.
     * @param {boolean} includePointDetails - Include all properties for the test point.
     * @param {number} skip - Number of test points to skip..
     * @param {number} top - Number of test points to return.
     */
    public async getPoints(
        project: string,
        planId: number,
        suiteId: number,
        witFields?: string,
        configurationId?: string,
        testCaseId?: string,
        testPointIds?: string,
        includePointDetails?: boolean,
        skip?: number,
        top?: number
    ): Promise<TestInterfaces.TestPoint[]> {

        return new Promise<TestInterfaces.TestPoint[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                witFields: witFields,
                configurationId: configurationId,
                testCaseId: testCaseId,
                testPointIds: testPointIds,
                includePointDetails: includePointDetails,
                '$skip': skip,
                '$top': top,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "3bcfd5c8-be62-488e-b1da-b8289ce9299c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestPoint[]>;
                res = await this.rest.get<TestInterfaces.TestPoint[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestPoint,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update test points.
     * 
     * @param {TestInterfaces.PointUpdateModel} pointUpdateModel - Data to update.
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan.
     * @param {number} suiteId - ID of the suite that contains the points.
     * @param {string} pointIds - ID of the test point to get. Use a comma-separated list of IDs to update multiple test points.
     */
    public async updateTestPoints(
        pointUpdateModel: TestInterfaces.PointUpdateModel,
        project: string,
        planId: number,
        suiteId: number,
        pointIds: string
    ): Promise<TestInterfaces.TestPoint[]> {

        return new Promise<TestInterfaces.TestPoint[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                pointIds: pointIds
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "3bcfd5c8-be62-488e-b1da-b8289ce9299c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestPoint[]>;
                res = await this.rest.update<TestInterfaces.TestPoint[]>(url, pointUpdateModel, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestPoint,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test points using query.
     * 
     * @param {TestInterfaces.TestPointsQuery} query - TestPointsQuery to get test points.
     * @param {string} project - Project ID or project name
     * @param {number} skip - Number of test points to skip..
     * @param {number} top - Number of test points to return.
     */
    public async getPointsByQuery(
        query: TestInterfaces.TestPointsQuery,
        project: string,
        skip?: number,
        top?: number
    ): Promise<TestInterfaces.TestPointsQuery> {

        return new Promise<TestInterfaces.TestPointsQuery>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                '$skip': skip,
                '$top': top,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "b4264fd0-a5d1-43e2-82a5-b9c46b7da9ce",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestPointsQuery>;
                res = await this.rest.create<TestInterfaces.TestPointsQuery>(url, query, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestPointsQuery,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {string} groupBy
     * @param {string} filter
     * @param {string} orderby
     * @param {boolean} shouldIncludeResults
     * @param {boolean} queryRunSummaryForInProgress
     */
    public async getTestResultDetailsForBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        groupBy?: string,
        filter?: string,
        orderby?: string,
        shouldIncludeResults?: boolean,
        queryRunSummaryForInProgress?: boolean
    ): Promise<TestInterfaces.TestResultsDetails> {

        return new Promise<TestInterfaces.TestResultsDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                groupBy: groupBy,
                '$filter': filter,
                '$orderby': orderby,
                shouldIncludeResults: shouldIncludeResults,
                queryRunSummaryForInProgress: queryRunSummaryForInProgress,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "efb387b0-10d5-42e7-be40-95e06ee9430f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestResultsDetails>;
                res = await this.rest.get<TestInterfaces.TestResultsDetails>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestResultsDetails,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     * @param {string} publishContext
     * @param {string} groupBy
     * @param {string} filter
     * @param {string} orderby
     * @param {boolean} shouldIncludeResults
     * @param {boolean} queryRunSummaryForInProgress
     */
    public async getTestResultDetailsForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number,
        publishContext?: string,
        groupBy?: string,
        filter?: string,
        orderby?: string,
        shouldIncludeResults?: boolean,
        queryRunSummaryForInProgress?: boolean
    ): Promise<TestInterfaces.TestResultsDetails> {

        return new Promise<TestInterfaces.TestResultsDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvId: releaseEnvId,
                publishContext: publishContext,
                groupBy: groupBy,
                '$filter': filter,
                '$orderby': orderby,
                shouldIncludeResults: shouldIncludeResults,
                queryRunSummaryForInProgress: queryRunSummaryForInProgress,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "b834ec7e-35bb-450f-a3c8-802e70ca40dd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestResultsDetails>;
                res = await this.rest.get<TestInterfaces.TestResultsDetails>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestResultsDetails,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.TestResultDocument} document
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async publishTestResultDocument(
        document: TestInterfaces.TestResultDocument,
        project: string,
        runId: number
    ): Promise<TestInterfaces.TestResultDocument> {

        return new Promise<TestInterfaces.TestResultDocument>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "370ca04b-8eec-4ca8-8ba3-d24dca228791",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestResultDocument>;
                res = await this.rest.create<TestInterfaces.TestResultDocument>(url, document, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {string[]} fields
     * @param {string} continuationToken
     */
    public async getResultGroupsByBuild(
        project: string,
        buildId: number,
        publishContext: string,
        fields?: string[],
        continuationToken?: string
    ): Promise<TestInterfaces.FieldDetailsForTestResults[]> {

        return new Promise<TestInterfaces.FieldDetailsForTestResults[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                fields: fields && fields.join(","),
                continuationToken: continuationToken,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "d279d052-c55a-4204-b913-42f733b52958",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.FieldDetailsForTestResults[]>;
                res = await this.rest.get<TestInterfaces.FieldDetailsForTestResults[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} publishContext
     * @param {number} releaseEnvId
     * @param {string[]} fields
     * @param {string} continuationToken
     */
    public async getResultGroupsByRelease(
        project: string,
        releaseId: number,
        publishContext: string,
        releaseEnvId?: number,
        fields?: string[],
        continuationToken?: string
    ): Promise<TestInterfaces.FieldDetailsForTestResults[]> {

        return new Promise<TestInterfaces.FieldDetailsForTestResults[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                publishContext: publishContext,
                releaseEnvId: releaseEnvId,
                fields: fields && fields.join(","),
                continuationToken: continuationToken,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "ef5ce5d4-a4e5-47ee-804c-354518f8d03f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.FieldDetailsForTestResults[]>;
                res = await this.rest.get<TestInterfaces.FieldDetailsForTestResults[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test result retention settings
     * 
     * @param {string} project - Project ID or project name
     */
    public async getResultRetentionSettings(
        project: string
    ): Promise<TestInterfaces.ResultRetentionSettings> {

        return new Promise<TestInterfaces.ResultRetentionSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "a3206d9e-fa8d-42d3-88cb-f75c51e69cde",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.ResultRetentionSettings>;
                res = await this.rest.get<TestInterfaces.ResultRetentionSettings>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.ResultRetentionSettings,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update test result retention settings
     * 
     * @param {TestInterfaces.ResultRetentionSettings} retentionSettings - Test result retention settings details to be updated
     * @param {string} project - Project ID or project name
     */
    public async updateResultRetentionSettings(
        retentionSettings: TestInterfaces.ResultRetentionSettings,
        project: string
    ): Promise<TestInterfaces.ResultRetentionSettings> {

        return new Promise<TestInterfaces.ResultRetentionSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "a3206d9e-fa8d-42d3-88cb-f75c51e69cde",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.ResultRetentionSettings>;
                res = await this.rest.update<TestInterfaces.ResultRetentionSettings>(url, retentionSettings, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.ResultRetentionSettings,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Add test results to a test run.
     * 
     * @param {TestInterfaces.TestCaseResult[]} results - List of test results to add.
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test run ID into which test results to add.
     */
    public async addTestResultsToTestRun(
        results: TestInterfaces.TestCaseResult[],
        project: string,
        runId: number
    ): Promise<TestInterfaces.TestCaseResult[]> {

        return new Promise<TestInterfaces.TestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.5",
                    "Test",
                    "4637d869-3a76-4468-8057-0bb02aa385cf",
                    routeValues);

                let url: string = verData.requestUrl;

                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestCaseResult[]>;
                res = await this.rest.create<TestInterfaces.TestCaseResult[]>(url, results, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestCaseResult,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a test result for a test run.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test run ID of a test result to fetch.
     * @param {number} testCaseResultId - Test result ID.
     * @param {TestInterfaces.ResultDetails} detailsToInclude - Details to include with test results. Default is None. Other values are Iterations, WorkItems and SubResults.
     */
    public async getTestResultById(
        isTfs: boolean,
        project: string,
        runId: number,
        testCaseResultId: number,
        detailsToInclude?: TestInterfaces.ResultDetails
    ): Promise<TestInterfaces.TestCaseResult> {

        return new Promise<TestInterfaces.TestCaseResult>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                detailsToInclude: detailsToInclude,
            };

            if (isTfs) {
                queryValues = {
                    includeIterationDetails: true,
                };
            }

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.5",
                    "Test",
                    "4637d869-3a76-4468-8057-0bb02aa385cf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestCaseResult>;
                res = await this.rest.get<TestInterfaces.TestCaseResult>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestCaseResult,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test results for a test run.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test run ID of test results to fetch.
     * @param {TestInterfaces.ResultDetails} detailsToInclude - Details to include with test results. Default is None. Other values are Iterations and WorkItems.
     * @param {number} skip - Number of test results to skip from beginning.
     * @param {number} top - Number of test results to return. Maximum is 1000 when detailsToInclude is None and 200 otherwise.
     * @param {TestInterfaces.TestOutcome[]} outcomes - Comma separated list of test outcomes to filter test results.
     */
    public async getTestResults(
        project: string,
        runId: number,
        detailsToInclude?: TestInterfaces.ResultDetails,
        skip?: number,
        top?: number,
        outcomes?: TestInterfaces.TestOutcome[]
    ): Promise<TestInterfaces.TestCaseResult[]> {

        return new Promise<TestInterfaces.TestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                detailsToInclude: detailsToInclude,
                '$skip': skip,
                '$top': top,
                outcomes: outcomes && outcomes.join(","),
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.5",
                    "Test",
                    "4637d869-3a76-4468-8057-0bb02aa385cf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestCaseResult[]>;
                res = await this.rest.get<TestInterfaces.TestCaseResult[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestCaseResult,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update test results in a test run.
     * 
     * @param {TestInterfaces.TestCaseResult[]} results - List of test results to update.
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test run ID whose test results to update.
     */
    public async updateTestResults(
        results: TestInterfaces.TestCaseResult[],
        project: string,
        runId: number
    ): Promise<TestInterfaces.TestCaseResult[]> {

        return new Promise<TestInterfaces.TestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.5",
                    "Test",
                    "4637d869-3a76-4468-8057-0bb02aa385cf",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestCaseResult[]>;
                res = await this.rest.update<TestInterfaces.TestCaseResult[]>(url, results, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestCaseResult,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.TestResultsQuery} query
     * @param {string} project - Project ID or project name
     */
    public async getTestResultsByQuery(
        query: TestInterfaces.TestResultsQuery,
        project: string
    ): Promise<TestInterfaces.TestResultsQuery> {

        return new Promise<TestInterfaces.TestResultsQuery>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.5",
                    "Test",
                    "6711da49-8e6f-4d35-9f73-cef7a3c81a5b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestResultsQuery>;
                res = await this.rest.create<TestInterfaces.TestResultsQuery>(url, query, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestResultsQuery,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {TestInterfaces.TestOutcome[]} outcomes
     * @param {number} top
     * @param {string} continuationToken
     */
    public async getTestResultsByBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        outcomes?: TestInterfaces.TestOutcome[],
        top?: number,
        continuationToken?: string
    ): Promise<TestInterfaces.ShallowTestCaseResult[]> {

        return new Promise<TestInterfaces.ShallowTestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                outcomes: outcomes && outcomes.join(","),
                '$top': top,
                continuationToken: continuationToken,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "3c191b88-615b-4be2-b7d9-5ff9141e91d4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.ShallowTestCaseResult[]>;
                res = await this.rest.get<TestInterfaces.ShallowTestCaseResult[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvid
     * @param {string} publishContext
     * @param {TestInterfaces.TestOutcome[]} outcomes
     * @param {number} top
     * @param {string} continuationToken
     */
    public async getTestResultsByRelease(
        project: string,
        releaseId: number,
        releaseEnvid?: number,
        publishContext?: string,
        outcomes?: TestInterfaces.TestOutcome[],
        top?: number,
        continuationToken?: string
    ): Promise<TestInterfaces.ShallowTestCaseResult[]> {

        return new Promise<TestInterfaces.ShallowTestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvid: releaseEnvid,
                publishContext: publishContext,
                outcomes: outcomes && outcomes.join(","),
                '$top': top,
                continuationToken: continuationToken,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "ce01820b-83f3-4c15-a583-697a43292c4e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.ShallowTestCaseResult[]>;
                res = await this.rest.get<TestInterfaces.ShallowTestCaseResult[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {boolean} includeFailureDetails
     * @param {TestInterfaces.BuildReference} buildToCompare
     */
    public async queryTestResultsReportForBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        buildToCompare?: TestInterfaces.BuildReference
    ): Promise<TestInterfaces.TestResultSummary> {

        return new Promise<TestInterfaces.TestResultSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                includeFailureDetails: includeFailureDetails,
                buildToCompare: buildToCompare,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "000ef77b-fea2-498d-a10d-ad1a037f559f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestResultSummary>;
                res = await this.rest.get<TestInterfaces.TestResultSummary>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestResultSummary,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     * @param {string} publishContext
     * @param {boolean} includeFailureDetails
     * @param {TestInterfaces.ReleaseReference} releaseToCompare
     */
    public async queryTestResultsReportForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        releaseToCompare?: TestInterfaces.ReleaseReference
    ): Promise<TestInterfaces.TestResultSummary> {

        return new Promise<TestInterfaces.TestResultSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvId: releaseEnvId,
                publishContext: publishContext,
                includeFailureDetails: includeFailureDetails,
                releaseToCompare: releaseToCompare,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "85765790-ac68-494e-b268-af36c3929744",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestResultSummary>;
                res = await this.rest.get<TestInterfaces.TestResultSummary>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestResultSummary,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.ReleaseReference[]} releases
     * @param {string} project - Project ID or project name
     */
    public async queryTestResultsSummaryForReleases(
        releases: TestInterfaces.ReleaseReference[],
        project: string
    ): Promise<TestInterfaces.TestResultSummary[]> {

        return new Promise<TestInterfaces.TestResultSummary[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "85765790-ac68-494e-b268-af36c3929744",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestResultSummary[]>;
                res = await this.rest.create<TestInterfaces.TestResultSummary[]>(url, releases, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestResultSummary,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.TestResultsContext} resultsContext
     * @param {string} project - Project ID or project name
     * @param {number[]} workItemIds
     */
    public async queryTestSummaryByRequirement(
        resultsContext: TestInterfaces.TestResultsContext,
        project: string,
        workItemIds?: number[]
    ): Promise<TestInterfaces.TestSummaryForWorkItem[]> {

        return new Promise<TestInterfaces.TestSummaryForWorkItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                workItemIds: workItemIds && workItemIds.join(","),
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "cd08294e-308d-4460-a46e-4cfdefba0b4b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSummaryForWorkItem[]>;
                res = await this.rest.create<TestInterfaces.TestSummaryForWorkItem[]>(url, resultsContext, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestSummaryForWorkItem,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.TestResultTrendFilter} filter
     * @param {string} project - Project ID or project name
     */
    public async queryResultTrendForBuild(
        filter: TestInterfaces.TestResultTrendFilter,
        project: string
    ): Promise<TestInterfaces.AggregatedDataForResultTrend[]> {

        return new Promise<TestInterfaces.AggregatedDataForResultTrend[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "fbc82a85-0786-4442-88bb-eb0fda6b01b0",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.AggregatedDataForResultTrend[]>;
                res = await this.rest.create<TestInterfaces.AggregatedDataForResultTrend[]>(url, filter, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.AggregatedDataForResultTrend,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.TestResultTrendFilter} filter
     * @param {string} project - Project ID or project name
     */
    public async queryResultTrendForRelease(
        filter: TestInterfaces.TestResultTrendFilter,
        project: string
    ): Promise<TestInterfaces.AggregatedDataForResultTrend[]> {

        return new Promise<TestInterfaces.AggregatedDataForResultTrend[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "dd178e93-d8dd-4887-9635-d6b9560b7b6e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.AggregatedDataForResultTrend[]>;
                res = await this.rest.create<TestInterfaces.AggregatedDataForResultTrend[]>(url, filter, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.AggregatedDataForResultTrend,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test run statistics
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the run to get.
     */
    public async getTestRunStatistics(
        project: string,
        runId: number
    ): Promise<TestInterfaces.TestRunStatistic> {

        return new Promise<TestInterfaces.TestRunStatistic>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "0a42c424-d764-4a16-a2d5-5c85f87d0ae8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestRunStatistic>;
                res = await this.rest.get<TestInterfaces.TestRunStatistic>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create new test run.
     * 
     * @param {TestInterfaces.RunCreateModel} testRun - Run details RunCreateModel
     * @param {string} project - Project ID or project name
     */
    public async createTestRun(
        testRun: TestInterfaces.RunCreateModel,
        project: string
    ): Promise<TestInterfaces.TestRun> {

        return new Promise<TestInterfaces.TestRun>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestRun>;
                res = await this.rest.create<TestInterfaces.TestRun>(url, testRun, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestRun,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a test run by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the run to delete.
     */
    public async deleteTestRun(
        project: string,
        runId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a test run by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the run to get.
     * @param {boolean} includeDetails - Defualt value is true. It includes details like run statistics,release,build,Test enviornment,Post process state and more
     */
    public async getTestRunById(
        project: string,
        runId: number,
        includeDetails?: boolean
    ): Promise<TestInterfaces.TestRun> {

        return new Promise<TestInterfaces.TestRun>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                includeDetails: includeDetails,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestRun>;
                res = await this.rest.get<TestInterfaces.TestRun>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestRun,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test runs.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} buildUri - URI of the build that the runs used.
     * @param {string} owner - Team foundation ID of the owner of the runs.
     * @param {string} tmiRunId
     * @param {number} planId - ID of the test plan that the runs are a part of.
     * @param {boolean} includeRunDetails - If true, include all the properties of the runs.
     * @param {boolean} automated - If true, only returns automated runs.
     * @param {number} skip - Number of test runs to skip.
     * @param {number} top - Number of test runs to return.
     */
    public async getTestRuns(
        project: string,
        buildUri?: string,
        owner?: string,
        tmiRunId?: string,
        planId?: number,
        includeRunDetails?: boolean,
        automated?: boolean,
        skip?: number,
        top?: number
    ): Promise<TestInterfaces.TestRun[]> {

        return new Promise<TestInterfaces.TestRun[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildUri: buildUri,
                owner: owner,
                tmiRunId: tmiRunId,
                planId: planId,
                includeRunDetails: includeRunDetails,
                automated: automated,
                '$skip': skip,
                '$top': top,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestRun[]>;
                res = await this.rest.get<TestInterfaces.TestRun[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestRun,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Query Test Runs based on filters.
     * 
     * @param {string} project - Project ID or project name
     * @param {Date} minLastUpdatedDate - Minimum Last Modified Date of run to be queried (Mandatory).
     * @param {Date} maxLastUpdatedDate - Maximum Last Modified Date of run to be queried (Mandatory, difference between min and max date can be atmost 7 days).
     * @param {TestInterfaces.TestRunState} state - Current state of the Runs to be queried.
     * @param {number[]} planIds - Plan Ids of the Runs to be queried, comma seperated list of valid ids (limit no. of ids 10).
     * @param {boolean} isAutomated - Automation type of the Runs to be queried.
     * @param {TestInterfaces.TestRunPublishContext} publishContext - PublishContext of the Runs to be queried.
     * @param {number[]} buildIds - Build Ids of the Runs to be queried, comma seperated list of valid ids (limit no. of ids 10).
     * @param {number[]} buildDefIds - Build Definition Ids of the Runs to be queried, comma seperated list of valid ids (limit no. of ids 10).
     * @param {string} branchName - Source Branch name of the Runs to be queried.
     * @param {number[]} releaseIds - Release Ids of the Runs to be queried, comma seperated list of valid ids (limit no. of ids 10).
     * @param {number[]} releaseDefIds - Release Definition Ids of the Runs to be queried, comma seperated list of valid ids (limit no. of ids 10).
     * @param {number[]} releaseEnvIds - Release Environment Ids of the Runs to be queried, comma seperated list of valid ids (limit no. of ids 10).
     * @param {number[]} releaseEnvDefIds - Release Environment Definition Ids of the Runs to be queried, comma seperated list of valid ids (limit no. of ids 10).
     * @param {string} runTitle - Run Title of the Runs to be queried.
     * @param {number} top - Number of runs to be queried. Limit is 100
     * @param {string} continuationToken - continuationToken received from previous batch or null for first batch.
     */
    public async queryTestRuns(
        project: string,
        minLastUpdatedDate: Date,
        maxLastUpdatedDate: Date,
        state?: TestInterfaces.TestRunState,
        planIds?: number[],
        isAutomated?: boolean,
        publishContext?: TestInterfaces.TestRunPublishContext,
        buildIds?: number[],
        buildDefIds?: number[],
        branchName?: string,
        releaseIds?: number[],
        releaseDefIds?: number[],
        releaseEnvIds?: number[],
        releaseEnvDefIds?: number[],
        runTitle?: string,
        top?: number,
        continuationToken?: string
    ): Promise<TestInterfaces.TestRun[]> {

        return new Promise<TestInterfaces.TestRun[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                minLastUpdatedDate: minLastUpdatedDate,
                maxLastUpdatedDate: maxLastUpdatedDate,
                state: state,
                planIds: planIds && planIds.join(","),
                isAutomated: isAutomated,
                publishContext: publishContext,
                buildIds: buildIds && buildIds.join(","),
                buildDefIds: buildDefIds && buildDefIds.join(","),
                branchName: branchName,
                releaseIds: releaseIds && releaseIds.join(","),
                releaseDefIds: releaseDefIds && releaseDefIds.join(","),
                releaseEnvIds: releaseEnvIds && releaseEnvIds.join(","),
                releaseEnvDefIds: releaseEnvDefIds && releaseEnvDefIds.join(","),
                runTitle: runTitle,
                '$top': top,
                continuationToken: continuationToken,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestRun[]>;
                res = await this.rest.get<TestInterfaces.TestRun[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestRun,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update test run by its ID.
     * 
     * @param {TestInterfaces.RunUpdateModel} runUpdateModel - Run details RunUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the run to update.
     */
    public async updateTestRun(
        runUpdateModel: TestInterfaces.RunUpdateModel,
        project: string,
        runId: number
    ): Promise<TestInterfaces.TestRun> {

        return new Promise<TestInterfaces.TestRun>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestRun>;
                res = await this.rest.update<TestInterfaces.TestRun>(url, runUpdateModel, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestRun,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a test session
     * 
     * @param {TestInterfaces.TestSession} testSession - Test session details for creation
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async createTestSession(
        testSession: TestInterfaces.TestSession,
        teamContext: TfsCoreInterfaces.TeamContext
    ): Promise<TestInterfaces.TestSession> {

        return new Promise<TestInterfaces.TestSession>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "1500b4b4-6c69-4ca6-9b18-35e9e97fe2ac",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSession>;
                res = await this.rest.create<TestInterfaces.TestSession>(url, testSession, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestSession,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test sessions
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {number} period - Period in days from now, for which test sessions are fetched.
     * @param {boolean} allSessions - If false, returns test sessions for current user. Otherwise, it returns test sessions for all users
     * @param {boolean} includeAllProperties - If true, it returns all properties of the test sessions. Otherwise, it returns the skinny version.
     * @param {TestInterfaces.TestSessionSource} source - Source of the test session.
     * @param {boolean} includeOnlyCompletedSessions - If true, it returns test sessions in completed state. Otherwise, it returns test sessions for all states
     */
    public async getTestSessions(
        teamContext: TfsCoreInterfaces.TeamContext,
        period?: number,
        allSessions?: boolean,
        includeAllProperties?: boolean,
        source?: TestInterfaces.TestSessionSource,
        includeOnlyCompletedSessions?: boolean
    ): Promise<TestInterfaces.TestSession[]> {

        return new Promise<TestInterfaces.TestSession[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            let queryValues: any = {
                period: period,
                allSessions: allSessions,
                includeAllProperties: includeAllProperties,
                source: source,
                includeOnlyCompletedSessions: includeOnlyCompletedSessions,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "1500b4b4-6c69-4ca6-9b18-35e9e97fe2ac",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSession[]>;
                res = await this.rest.get<TestInterfaces.TestSession[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestSession,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a test session
     * 
     * @param {TestInterfaces.TestSession} testSession - Test session details for update
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async updateTestSession(
        testSession: TestInterfaces.TestSession,
        teamContext: TfsCoreInterfaces.TeamContext
    ): Promise<TestInterfaces.TestSession> {

        return new Promise<TestInterfaces.TestSession>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "1500b4b4-6c69-4ca6-9b18-35e9e97fe2ac",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSession>;
                res = await this.rest.update<TestInterfaces.TestSession>(url, testSession, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestSession,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} sharedParameterId
     */
    public async deleteSharedParameter(
        project: string,
        sharedParameterId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                sharedParameterId: sharedParameterId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "8300eeca-0f8c-4eff-a089-d2dda409c41f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} sharedStepId
     */
    public async deleteSharedStep(
        project: string,
        sharedStepId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                sharedStepId: sharedStepId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "fabb3cc9-e3f8-40b7-8b62-24cc4b73fccf",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test suite entries in the test suite.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} suiteId - Id of the parent suite.
     */
    public async getSuiteEntries(
        project: string,
        suiteId: number
    ): Promise<TestInterfaces.SuiteEntry[]> {

        return new Promise<TestInterfaces.SuiteEntry[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData;
                if (this.isTfs) {
                    verData = await this.vsoClient.getVersioningDataOld(
                        "5.0-preview.1",
                        "Test",
                        "bf8b7f78-0c1f-49cb-89e9-d1a17bcaaad3",
                        routeValues);
                } else {
                    verData = await this.vsoClient.getVersioningData(
                        "5.0-preview.1",
                        "Test",
                        "bf8b7f78-0c1f-49cb-89e9-d1a17bcaaad3",
                        routeValues);
                }

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.SuiteEntry[]>;
                res = await this.rest.get<TestInterfaces.SuiteEntry[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Reorder test suite entries in the test suite.
     * 
     * @param {TestInterfaces.SuiteEntryUpdateModel[]} suiteEntries - List of SuiteEntryUpdateModel to reorder.
     * @param {string} project - Project ID or project name
     * @param {number} suiteId - Id of the parent test suite.
     */
    public async reorderSuiteEntries(
        suiteEntries: TestInterfaces.SuiteEntryUpdateModel[],
        project: string,
        suiteId: number
    ): Promise<TestInterfaces.SuiteEntry[]> {

        return new Promise<TestInterfaces.SuiteEntry[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "bf8b7f78-0c1f-49cb-89e9-d1a17bcaaad3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.SuiteEntry[]>;
                res = await this.rest.update<TestInterfaces.SuiteEntry[]>(url, suiteEntries, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Add test cases to suite.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suite.
     * @param {number} suiteId - ID of the test suite to which the test cases must be added.
     * @param {string} testCaseIds - IDs of the test cases to add to the suite. Ids are specified in comma separated format.
     */
    public async addTestCasesToSuite(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string
    ): Promise<TestInterfaces.SuiteTestCase[]> {

        return new Promise<TestInterfaces.SuiteTestCase[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                action: "testcases",
                testCaseIds: testCaseIds
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                    routeValues);

                let url: string = verData.requestUrl + "?api-version=5.0-preview.3";
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.SuiteTestCase[]>;
                res = await this.rest.create<TestInterfaces.SuiteTestCase[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a specific test case in a test suite with test case id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suites.
     * @param {number} suiteId - ID of the suite that contains the test case.
     * @param {number} testCaseIds - ID of the test case to get.
     */
    public async getTestCaseById(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: number
    ): Promise<TestInterfaces.SuiteTestCase> {

        return new Promise<TestInterfaces.SuiteTestCase>(async (resolve, reject) => {

            let routeValues: any;
            if (this.isTfs) {
                routeValues = {
                    project: project,
                    planId: planId,
                    suiteId: suiteId,
                    action: "testcases",
                    testCaseIds: testCaseIds
                };
            } else {
                routeValues = {
                    project: project,
                    planId: planId,
                    suiteId: suiteId,
                    testCaseIds: testCaseIds
                };
            }

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.SuiteTestCase>;
                res = await this.rest.get<TestInterfaces.SuiteTestCase>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get all test cases in a suite.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suites.
     * @param {number} suiteId - ID of the suite to get.
     */
    public async getTestCases(
        project: string,
        planId: number,
        suiteId: number
    ): Promise<TestInterfaces.SuiteTestCase[]> {

        return new Promise<TestInterfaces.SuiteTestCase[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                action: "testcases"
            };

            try {
                let verData: vsom.ClientVersioningData;
                if (this.isTfs) {
                    verData = await this.vsoClient.getVersioningDataOld(
                        "5.0-preview.3",
                        "Test",
                        "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                        routeValues);
                } else {
                    verData = await this.vsoClient.getVersioningData(
                        "5.0-preview.3",
                        "Test",
                        "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                        routeValues);
                }

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.SuiteTestCase[]>;
                res = await this.rest.get<TestInterfaces.SuiteTestCase[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * The test points associated with the test cases are removed from the test suite. The test case work item is not deleted from the system. See test cases resource to delete a test case permanently.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suite.
     * @param {number} suiteId - ID of the suite to get.
     * @param {string} testCaseIds - IDs of the test cases to remove from the suite.
     */
    public async removeTestCasesFromSuiteUrl(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                testCaseIds: testCaseIds
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Updates the properties of the test case association in a suite.
     * 
     * @param {TestInterfaces.SuiteTestCaseUpdateModel} suiteTestCaseUpdateModel - Model for updation of the properties of test case suite association.
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suite.
     * @param {number} suiteId - ID of the test suite to which the test cases must be added.
     * @param {string} testCaseIds - IDs of the test cases to add to the suite. Ids are specified in comma separated format.
     */
    public async updateSuiteTestCases(
        suiteTestCaseUpdateModel: TestInterfaces.SuiteTestCaseUpdateModel,
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string
    ): Promise<TestInterfaces.SuiteTestCase[]> {

        return new Promise<TestInterfaces.SuiteTestCase[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                testCaseIds: testCaseIds
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.SuiteTestCase[]>;
                res = await this.rest.update<TestInterfaces.SuiteTestCase[]>(url, suiteTestCaseUpdateModel, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a test suite.
     * 
     * @param {TestInterfaces.SuiteCreateModel} testSuite - Test suite data.
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suite.
     * @param {number} suiteId - ID of the parent suite.
     */
    public async createTestSuite(
        testSuite: TestInterfaces.SuiteCreateModel,
        project: string,
        planId: number,
        suiteId: number
    ): Promise<TestInterfaces.TestSuite[]> {

        return new Promise<TestInterfaces.TestSuite[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSuite[]>;
                res = await this.rest.create<TestInterfaces.TestSuite[]>(url, testSuite, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestSuite,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete test suite.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suite.
     * @param {number} suiteId - ID of the test suite to delete.
     */
    public async deleteTestSuite(
        project: string,
        planId: number,
        suiteId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test suite by suite id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suites.
     * @param {number} suiteId - ID of the suite to get.
     * @param {number} expand - Include the children suites and testers details
     */
    public async getTestSuiteById(
        project: string,
        planId: number,
        suiteId: number,
        expand?: number
    ): Promise<TestInterfaces.TestSuite> {

        return new Promise<TestInterfaces.TestSuite>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                '$expand': expand,
            };

            try {
                let verData: vsom.ClientVersioningData;
                if (this.isTfs) {
                    verData = await this.vsoClient.getVersioningDataOld(
                        "5.0-preview.3",
                        "Test",
                        "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                        routeValues,
                        queryValues);
                } else {
                    verData = await this.vsoClient.getVersioningData(
                        "5.0-preview.3",
                        "Test",
                        "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                        routeValues,
                        queryValues);
                }

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSuite>;
                res = await this.rest.get<TestInterfaces.TestSuite>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestSuite,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test suites for plan.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan for which suites are requested.
     * @param {number} expand - Include the children suites and testers details.
     * @param {number} skip - Number of suites to skip from the result.
     * @param {number} top - Number of Suites to be return after skipping the suites from the result.
     * @param {boolean} asTreeView - If the suites returned should be in a tree structure.
     */
    public async getTestSuitesForPlan(
        project: string,
        planId: number,
        expand?: number,
        skip?: number,
        top?: number,
        asTreeView?: boolean
    ): Promise<TestInterfaces.TestSuite[]> {

        return new Promise<TestInterfaces.TestSuite[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            let queryValues: any = {
                '$expand': expand,
                '$skip': skip,
                '$top': top,
                '$asTreeView': asTreeView,
            };

            try {
                let verData: vsom.ClientVersioningData;
                if (this.isTfs) {
                    verData = await this.vsoClient.getVersioningDataOld(
                        "5.0-preview.3",
                        "Test",
                        "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                        routeValues,
                        queryValues);
                } else {
                    verData = await this.vsoClient.getVersioningData(
                        "5.0-preview.3",
                        "Test",
                        "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                        routeValues,
                        queryValues);
                }

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSuite[]>;
                res = await this.rest.get<TestInterfaces.TestSuite[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestSuite,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a test suite.
     * 
     * @param {TestInterfaces.SuiteUpdateModel} suiteUpdateModel - Suite Model to update
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suites.
     * @param {number} suiteId - ID of the suite to update.
     */
    public async updateTestSuite(
        suiteUpdateModel: TestInterfaces.SuiteUpdateModel,
        project: string,
        planId: number,
        suiteId: number
    ): Promise<TestInterfaces.TestSuite> {

        return new Promise<TestInterfaces.TestSuite>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSuite>;
                res = await this.rest.update<TestInterfaces.TestSuite>(url, suiteUpdateModel, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestSuite,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Find the list of all test suites in which a given test case is present. This is helpful if you need to find out which test suites are using a test case, when you need to make changes to a test case.
     * 
     * @param {number} testCaseId - ID of the test case for which suites need to be fetched.
     */
    public async getSuitesByTestCaseId(
        testCaseId: number
    ): Promise<TestInterfaces.TestSuite[]> {

        return new Promise<TestInterfaces.TestSuite[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                testCaseId: testCaseId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.3",
                    "Test",
                    "09a6167b-e969-4775-9247-b94cf3819caf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSuite[]>;
                res = await this.rest.get<TestInterfaces.TestSuite[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestSuite,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a test case.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testCaseId - Id of test case to delete.
     */
    public async deleteTestCase(
        project: string,
        testCaseId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testCaseId: testCaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "4d472e0f-e32c-4ef8-adf4-a4078772889c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get history of a test method using TestHistoryQuery
     * 
     * @param {TestInterfaces.TestHistoryQuery} filter - TestHistoryQuery to get history
     * @param {string} project - Project ID or project name
     */
    public async queryTestHistory(
        filter: TestInterfaces.TestHistoryQuery,
        project: string
    ): Promise<TestInterfaces.TestHistoryQuery> {

        return new Promise<TestInterfaces.TestHistoryQuery>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "929fd86c-3e38-4d8c-b4b6-90df256e5971",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestHistoryQuery>;
                res = await this.rest.create<TestInterfaces.TestHistoryQuery>(url, filter, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.TestHistoryQuery,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.TestSettings} testSettings
     * @param {string} project - Project ID or project name
     */
    public async createTestSettings(
        testSettings: TestInterfaces.TestSettings,
        project: string
    ): Promise<number> {

        return new Promise<number>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "8133ce14-962f-42af-a5f9-6aa9defcb9c8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<number>;
                res = await this.rest.create<number>(url, testSettings, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     */
    public async deleteTestSettings(
        project: string,
        testSettingsId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testSettingsId: testSettingsId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "8133ce14-962f-42af-a5f9-6aa9defcb9c8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     */
    public async getTestSettingsById(
        project: string,
        testSettingsId: number
    ): Promise<TestInterfaces.TestSettings> {

        return new Promise<TestInterfaces.TestSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testSettingsId: testSettingsId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "8133ce14-962f-42af-a5f9-6aa9defcb9c8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestSettings>;
                res = await this.rest.get<TestInterfaces.TestSettings>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a test variable.
     * 
     * @param {TestInterfaces.TestVariable} testVariable - TestVariable
     * @param {string} project - Project ID or project name
     */
    public async createTestVariable(
        testVariable: TestInterfaces.TestVariable,
        project: string
    ): Promise<TestInterfaces.TestVariable> {

        return new Promise<TestInterfaces.TestVariable>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestVariable>;
                res = await this.rest.create<TestInterfaces.TestVariable>(url, testVariable, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a test variable by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId - ID of the test variable to delete.
     */
    public async deleteTestVariable(
        project: string,
        testVariableId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testVariableId: testVariableId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a test variable by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId - ID of the test variable to get.
     */
    public async getTestVariableById(
        project: string,
        testVariableId: number
    ): Promise<TestInterfaces.TestVariable> {

        return new Promise<TestInterfaces.TestVariable>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testVariableId: testVariableId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestVariable>;
                res = await this.rest.get<TestInterfaces.TestVariable>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test variables.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} skip - Number of test variables to skip.
     * @param {number} top - Number of test variables to return.
     */
    public async getTestVariables(
        project: string,
        skip?: number,
        top?: number
    ): Promise<TestInterfaces.TestVariable[]> {

        return new Promise<TestInterfaces.TestVariable[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                '$skip': skip,
                '$top': top,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestVariable[]>;
                res = await this.rest.get<TestInterfaces.TestVariable[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a test variable by its ID.
     * 
     * @param {TestInterfaces.TestVariable} testVariable - TestVariable
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId - ID of the test variable to update.
     */
    public async updateTestVariable(
        testVariable: TestInterfaces.TestVariable,
        project: string,
        testVariableId: number
    ): Promise<TestInterfaces.TestVariable> {

        return new Promise<TestInterfaces.TestVariable>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testVariableId: testVariableId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestVariable>;
                res = await this.rest.update<TestInterfaces.TestVariable>(url, testVariable, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestInterfaces.WorkItemToTestLinks} workItemToTestLinks
     * @param {string} project - Project ID or project name
     */
    public async addWorkItemToTestLinks(
        workItemToTestLinks: TestInterfaces.WorkItemToTestLinks,
        project: string
    ): Promise<TestInterfaces.WorkItemToTestLinks> {

        return new Promise<TestInterfaces.WorkItemToTestLinks>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "371b1655-ce05-412e-a113-64cc77bb78d2",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.WorkItemToTestLinks>;
                res = await this.rest.create<TestInterfaces.WorkItemToTestLinks>(url, workItemToTestLinks, options);

                let ret = this.formatResponse(res.result,
                    TestInterfaces.TypeInfo.WorkItemToTestLinks,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} testName
     * @param {number} workItemId
     */
    public async deleteTestMethodToWorkItemLink(
        project: string,
        testName: string,
        workItemId: number
    ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testName: testName,
                workItemId: workItemId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "7b0bdee3-a354-47f9-a42c-89018d7808d5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<boolean>;
                res = await this.rest.del<boolean>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} testName
     */
    public async queryTestMethodLinkedWorkItems(
        project: string,
        testName: string
    ): Promise<TestInterfaces.TestToWorkItemLinks> {

        return new Promise<TestInterfaces.TestToWorkItemLinks>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testName: testName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "7b0bdee3-a354-47f9-a42c-89018d7808d5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.TestToWorkItemLinks>;
                res = await this.rest.create<TestInterfaces.TestToWorkItemLinks>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} workItemCategory
     * @param {string} automatedTestName
     * @param {number} testCaseId
     * @param {Date} maxCompleteDate
     * @param {number} days
     * @param {number} workItemCount
     */
    public async queryTestResultWorkItems(
        project: string,
        workItemCategory: string,
        automatedTestName?: string,
        testCaseId?: number,
        maxCompleteDate?: Date,
        days?: number,
        workItemCount?: number
    ): Promise<TestInterfaces.WorkItemReference[]> {

        return new Promise<TestInterfaces.WorkItemReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                workItemCategory: workItemCategory,
                automatedTestName: automatedTestName,
                testCaseId: testCaseId,
                maxCompleteDate: maxCompleteDate,
                days: days,
                '$workItemCount': workItemCount,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Test",
                    "926ff5dc-137f-45f0-bd51-9412fa9810ce",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<TestInterfaces.WorkItemReference[]>;
                res = await this.rest.get<TestInterfaces.WorkItemReference[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

}
