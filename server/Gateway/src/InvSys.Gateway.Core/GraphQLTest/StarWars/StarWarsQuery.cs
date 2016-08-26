﻿using GraphQL.Types;
using InvSys.Gateway.Core.GraphQLTest.StarWars.Types;

namespace InvSys.Gateway.Core.GraphQLTest.StarWars
{
    public class StarWarsQuery : ObjectGraphType
    {
        public StarWarsQuery(StarWarsData data)
        {
            Name = "Query";

            Field<CharacterInterface>("hero", resolve: context => data.GetDroidByIdAsync("3"));
            Field<HumanType>(
                "human",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "id", Description = "id of the human" }
                ),
                resolve: context => data.GetHumanByIdAsync(context.Argument<string>("id"))
            );
            Field<DroidType>(
                "droid",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "id", Description = "id of the droid" }
                ),
                resolve: context => data.GetDroidByIdAsync(context.Argument<string>("id"))
            );
        }
    }
}
