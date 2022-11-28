/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTasks: OnCreateTasksSubscription;
  onUpdateTasks: OnUpdateTasksSubscription;
  onDeleteTasks: OnDeleteTasksSubscription;
};

export type CreateTasksInput = {
  id?: string | null;
  topic: string;
  title: string;
  status: boolean;
  completionDate?: string | null;
};

export type ModelTasksConditionInput = {
  topic?: ModelStringInput | null;
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  completionDate?: ModelStringInput | null;
  and?: Array<ModelTasksConditionInput | null> | null;
  or?: Array<ModelTasksConditionInput | null> | null;
  not?: ModelTasksConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Tasks = {
  __typename: "Tasks";
  id: string;
  topic: string;
  title: string;
  status: boolean;
  completionDate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTasksInput = {
  id: string;
  topic?: string | null;
  title?: string | null;
  status?: boolean | null;
  completionDate?: string | null;
};

export type DeleteTasksInput = {
  id: string;
};

export type ModelTasksFilterInput = {
  id?: ModelIDInput | null;
  topic?: ModelStringInput | null;
  title?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  completionDate?: ModelStringInput | null;
  and?: Array<ModelTasksFilterInput | null> | null;
  or?: Array<ModelTasksFilterInput | null> | null;
  not?: ModelTasksFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelTasksConnection = {
  __typename: "ModelTasksConnection";
  items: Array<Tasks | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionTasksFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  topic?: ModelSubscriptionStringInput | null;
  title?: ModelSubscriptionStringInput | null;
  status?: ModelSubscriptionBooleanInput | null;
  completionDate?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTasksFilterInput | null> | null;
  or?: Array<ModelSubscriptionTasksFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateTasksMutation = {
  __typename: "Tasks";
  id: string;
  topic: string;
  title: string;
  status: boolean;
  completionDate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTasksMutation = {
  __typename: "Tasks";
  id: string;
  topic: string;
  title: string;
  status: boolean;
  completionDate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTasksMutation = {
  __typename: "Tasks";
  id: string;
  topic: string;
  title: string;
  status: boolean;
  completionDate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetTasksQuery = {
  __typename: "Tasks";
  id: string;
  topic: string;
  title: string;
  status: boolean;
  completionDate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTasksConnection";
  items: Array<{
    __typename: "Tasks";
    id: string;
    topic: string;
    title: string;
    status: boolean;
    completionDate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateTasksSubscription = {
  __typename: "Tasks";
  id: string;
  topic: string;
  title: string;
  status: boolean;
  completionDate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTasksSubscription = {
  __typename: "Tasks";
  id: string;
  topic: string;
  title: string;
  status: boolean;
  completionDate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTasksSubscription = {
  __typename: "Tasks";
  id: string;
  topic: string;
  title: string;
  status: boolean;
  completionDate?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTasks(
    input: CreateTasksInput,
    condition?: ModelTasksConditionInput
  ): Promise<CreateTasksMutation> {
    const statement = `mutation CreateTasks($input: CreateTasksInput!, $condition: ModelTasksConditionInput) {
        createTasks(input: $input, condition: $condition) {
          __typename
          id
          topic
          title
          status
          completionDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTasksMutation>response.data.createTasks;
  }
  async UpdateTasks(
    input: UpdateTasksInput,
    condition?: ModelTasksConditionInput
  ): Promise<UpdateTasksMutation> {
    const statement = `mutation UpdateTasks($input: UpdateTasksInput!, $condition: ModelTasksConditionInput) {
        updateTasks(input: $input, condition: $condition) {
          __typename
          id
          topic
          title
          status
          completionDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTasksMutation>response.data.updateTasks;
  }
  async DeleteTasks(
    input: DeleteTasksInput,
    condition?: ModelTasksConditionInput
  ): Promise<DeleteTasksMutation> {
    const statement = `mutation DeleteTasks($input: DeleteTasksInput!, $condition: ModelTasksConditionInput) {
        deleteTasks(input: $input, condition: $condition) {
          __typename
          id
          topic
          title
          status
          completionDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTasksMutation>response.data.deleteTasks;
  }
  async GetTasks(id: string): Promise<GetTasksQuery> {
    const statement = `query GetTasks($id: ID!) {
        getTasks(id: $id) {
          __typename
          id
          topic
          title
          status
          completionDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTasksQuery>response.data.getTasks;
  }
  async ListTasks(
    id?: string,
    filter?: ModelTasksFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($id: ID, $filter: ModelTasksFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listTasks(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            topic
            title
            status
            completionDate
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  OnCreateTasksListener(
    filter?: ModelSubscriptionTasksFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTasks">>
  > {
    const statement = `subscription OnCreateTasks($filter: ModelSubscriptionTasksFilterInput) {
        onCreateTasks(filter: $filter) {
          __typename
          id
          topic
          title
          status
          completionDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTasks">>
    >;
  }

  OnUpdateTasksListener(
    filter?: ModelSubscriptionTasksFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTasks">>
  > {
    const statement = `subscription OnUpdateTasks($filter: ModelSubscriptionTasksFilterInput) {
        onUpdateTasks(filter: $filter) {
          __typename
          id
          topic
          title
          status
          completionDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTasks">>
    >;
  }

  OnDeleteTasksListener(
    filter?: ModelSubscriptionTasksFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTasks">>
  > {
    const statement = `subscription OnDeleteTasks($filter: ModelSubscriptionTasksFilterInput) {
        onDeleteTasks(filter: $filter) {
          __typename
          id
          topic
          title
          status
          completionDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTasks">>
    >;
  }
}
